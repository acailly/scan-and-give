import React, {Component} from "react";
import jsQR from "jsqr";
import api from "./api";
import CardMedia from "@material-ui/core/CardMedia";
import {withStyles} from "@material-ui/core";
import objectHash from 'object-hash';
import Modal from "@material-ui/core/Modal";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  cardImage: {
    height: 180,
    width: 450,
    backgroundSize: 'contain',
    alignSelf: 'center'
  },
  resume: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px'
  },
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  modal: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
  }
});

class Scanner extends Component {
  videoRef = React.createRef();
  canvasRef = React.createRef();
  state = {
    loading: true,
    videoDevices: [],
    association: null,
    donExist: false,
    sending: false
  };

  componentDidMount() {
    api.getAssociation(this.props.match.params.associationId).then(response => this.setState({association: response}));
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
        if (code && code.data && !this.state.donExist && !this.state.sending) {
          this.setState({sending: true});
          api
            .addDon(objectHash(code.data), new Date(), parseInt(this.props.match.params.associationId))
            .then(() => {
              this.props.history.push({
                pathname: '/done',
              });
            })
            .catch(error => {
              if (error.response.status === 400) {
                this.setState({donExist: true})
              }
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

  getAssociation = () => {
    if (this.state.association) {
      const {classes} = this.props;
      return (
        <div className={classes.resume}>
          <CardMedia
            className={classes.cardImage}
            image={'/' + this.state.association.image}
            title={this.state.association.nom}
          />
          <h1>{this.state.association.nom}</h1>
        </div>
      );
    } else {
      return (<div></div>);
    }
  };

  getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  handleClose = () => {
    this.setState({donExist: false});
  };

  render() {
    const {classes} = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.donExist}
          onClose={this.handleClose}
        >
          <div className={classes.modal}>
            <Icon color={"error"}>warning</Icon>
            Vous avez déjà donné
          </div>
        </Modal>
        <div className={classes.layout}>
          {this.getAssociation()}
          <div>
            <video ref={this.videoRef} hidden/>
            <canvas ref={this.canvasRef} hidden={this.state.loading}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Scanner);