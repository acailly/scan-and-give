import React, { Component } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Link } from "react-router-dom";

const styles = () => ({
  titre: {
    color: "#C00"
  },
  card: {
    display: "flex",
    marginBottom: 15,
    minHeight: 200,
    backgroundColor: "#afb0af",
    fontFamily: "Ghostbusters",
    fontStyle: "normal",
    fontWeight: 400
  },
  cardImage: {
    height: 180,
    width: 450,
    backgroundSize: "contain",
    alignSelf: "center"
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

class Association extends Component {
  state = {
    associations: []
  };

  render() {
    const { classes } = this.props;
    return (
      <ButtonBase focusRipple component={Link} to={"/scanner/" + this.props.id}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardImage}
            image={this.props.image}
            title={this.props.nom}
          />
          <CardContent className={classes.cardContent}>
            <h2 className={classes.titre}>{"Soutenir " + this.props.nom}</h2>
            <Typography
              component="p"
              dangerouslySetInnerHTML={{
                __html: this.props.description.replace(/\n/g, "<br />")
              }}
            />
          </CardContent>
        </Card>
      </ButtonBase>
    );
  }
}

export default withStyles(styles)(Association);
