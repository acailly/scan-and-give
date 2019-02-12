import React, {Component} from "react";
import jsQR from "jsqr";

class Home extends Component {
  videoRef = React.createRef();
  canvasRef = React.createRef();
  state = {
    loading: true,
    code: null,
    videoDevices: []
  };

  componentDidMount() {
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

  componentDidUpdate() {
    if (!this.state.loading) {
      if (this.state.code) {
        this.drawLineAroundQRCode(this.state.code);
        // outputMessage.hidden = true;
        // outputData.parentElement.hidden = false;
        // outputData.innerText = code.data;
      } else {
        // outputMessage.hidden = false;
        // outputData.parentElement.hidden = true;
      }
    }
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

  drawLineAroundQRCode = code => {
    let color = "#FF3B58";
    const isLeft =
      code.location.topLeftCorner.x < this.state.canvasWidth / 2 &&
      code.location.topRightCorner.x < this.state.canvasWidth / 2;
    const isRight =
      code.location.topLeftCorner.x > this.state.canvasWidth / 2 &&
      code.location.topRightCorner.x > this.state.canvasWidth / 2;
    const isUp =
      code.location.topLeftCorner.y < this.state.canvasHeight / 2 &&
      code.location.bottomLeftCorner.y < this.state.canvasHeight / 2;
    const isDown =
      code.location.topLeftCorner.y > this.state.canvasHeight / 2 &&
      code.location.bottomLeftCorner.y > this.state.canvasHeight / 2;

    if (isUp && isLeft) {
      color = "#00FF00"; // GREEN
    } else if (isUp && isRight) {
      color = "#0000FF"; // BLUE
    } else if (isDown && isLeft) {
      color = "#00FFFF"; // JAUNE
    } else if (isDown && isRight) {
      color = "#FFFF00"; // CYAN
    }

    this.drawLineOnCanvas(
      code.location.topLeftCorner,
      code.location.topRightCorner,
      color
    );
    this.drawLineOnCanvas(
      code.location.topRightCorner,
      code.location.bottomRightCorner,
      color
    );
    this.drawLineOnCanvas(
      code.location.bottomRightCorner,
      code.location.bottomLeftCorner,
      color
    );
    this.drawLineOnCanvas(
      code.location.bottomLeftCorner,
      code.location.topLeftCorner,
      color
    );
  };

  drawLineOnCanvas = (begin, end, color) => {
    const canvasContext = this.canvasRef.current.getContext("2d");
    canvasContext.beginPath();
    canvasContext.moveTo(begin.x, begin.y);
    canvasContext.lineTo(end.x, end.y);
    canvasContext.lineWidth = 4;
    canvasContext.strokeStyle = color;
    canvasContext.stroke();
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

export default Home;