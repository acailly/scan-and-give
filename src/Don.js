import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  titre: {
    color: "#00a94e"
  },
  content: {
    paddingRight: 30,
    color: "#333",
    marginBottom: "20px"
  },
  cardImageContainer: {
    flex: "0 0 330px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center"
  },
  card: {
    borderRadius: 10,
    width: "100%",
    display: "flex",
    marginBottom: 15,
    minHeight: 200,
    backgroundColor: "white",
    fontFamily: "Ghostbusters",
    fontStyle: "normal",
    fontWeight: 400
  },
  cardImage: {
    maxWidth: 300,
    height: 180
  },
  cardContent: {
    flexGrow: 1
  },
  rightIcon: {
    marginLeft: 8,
    color: "#C00"
  },
  button: {
    color: "#C00"
  },
  textButton: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
});
class Don extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.card}>
        <div className={classes.cardImageContainer}>
          <img
            className={classes.cardImage}
            src={this.props.image}
            alt={this.props.association}
          />
        </div>
        <div className={classes.cardContent}>
          <h2 className={classes.titre}>{this.props.association}</h2>
          <Typography variant="h2" component="h1" className={classes.content}>
            {this.props.nombre}€ grâce à vous !
          </Typography>
          <Typography variant="h4" component="h1" className={classes.content}>
            soit 12 repas distribués
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Don);
