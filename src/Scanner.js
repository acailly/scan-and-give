import React, {Component} from "react";
import jsQR from "jsqr";
import axios from "axios";

class Scanner extends Component {
  videoRef = React.createRef();
  canvasRef = React.createRef();
  state = {
    loading: true,
    code: null,
    videoDevices: [],
    association: null
  };

  componentDidMount() {
    axios.get('/api/associations/' + this.props.match.params.associationId).then(response => {
      this.setState({association: response.data})
    }).catch(error => {
      console.log(error);
    });
    navigator.mediaDevices.enumerateDevices().then(this.onEnumerateDevices);

    //TODO ACY Select webcam : https://www.twilio.com/blog/2018/04/choosing-cameras-javascript-mediadevices-api.html

    navigator.mediaDevices
    // .getUserMedia({ video: { facingMode: "environment" } })
      .getUserMedia({
        video: {
          deviceId:
            "23ccb9f41f9998e0fa16662561502eecfd3a8f0b50c3d5385ac2b66489f76d72"
        }
      })
      .then(stream => {
        const video = this.videoRef.current;
        video.srcObject = stream;
        video.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
        video.play();
        requestAnimationFrame(this.tick);
      });
  }

  tick = () => {
    this.analyzeVideoFrame();
    requestAnimationFrame(this.tick);
  };

  analyzeVideoFrame = () => {
    const video = this.videoRef.current;
    if (this.state.loading && video.readyState === video.HAVE_ENOUGH_DATA) {
      this.setState({
        loading: false,
        canvasWidth: video.videoWidth,
        canvasHeight: video.videoHeight
      });
      return;
    }

    if (!this.state.loading) {
      const video = this.videoRef.current;
      const canvas = this.canvasRef.current;
      if (canvas !== null) {
        const canvasContext = canvas.getContext("2d");
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        canvasContext.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvasContext.getImageData(
          0,
          0,
          canvas.width,
          canvas.height
        );
        const code = jsQR(imageData.data, imageData.width, imageData.height, {
          inversionAttempts: "dontInvert"
        });
        this.setState({code});
        if (code && code.data) {
          this.props.history.push({
            pathname: '/identite',
            state: {code: code.data}
          });
        }
      }
    }
  };

  onEnumerateDevices = mediaDevices => {
    const videoDevices = mediaDevices.filter(
      mediaDevice => mediaDevice.kind === "videoinput"
    );
    this.setState({videoDevices});
  };

  render() {
    return (
      <div>
        {this.state.loading && <p>Loading...</p>}
        <p>{this.state.code ? this.state.code.data : "Scan to give 1€"}</p>
        <video ref={this.videoRef} hidden/>
        <canvas ref={this.canvasRef} hidden={this.state.loading}/>
      </div>
    );
  }
}

export default Scanner;