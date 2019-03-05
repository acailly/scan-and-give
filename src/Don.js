import React, { Component } from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  card: {
    display: "flex",
    marginBottom: 15,
    minHeight: 200,
    backgroundColor: '#afb0af'
  },
  cardImage: {
    height: 180,
    width: 450,
    backgroundSize: "contain",
    alignSelf: "center"
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    justifyContent: "center"
  },
  rightIcon: {
    marginLeft: 8
  }
});
class Don extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardImage}
          image={this.props.image}
          title={this.props.association}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.association}
          </Typography>
          <Typography variant="h2" component="h1">
            {this.props.nombre}€ grâce à vous !
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Don);
