import React, {Component} from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Icon from "@material-ui/core/Icon";

const styles = () => ({
  titre: {
    color: '#c31436'
  },
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
    flexGrow: 1
  },
  rightIcon: {
    marginLeft: 8,
    color: '#c31436'
  },
  button: {
    color: '#c31436'
  },
  textButton: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

class Association extends Component {
  state = {
    associations: []
  };

  render() {
    const {classes} = this.props;
    return (
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardImage}
          image={this.props.image}
          title={this.props.nom}
        />
        <CardContent className={classes.cardContent}>
          <h2 className={classes.titre}>
            {this.props.nom}
          </h2>
          <Typography
            component="p"
            dangerouslySetInnerHTML={{
              __html: this.props.description.replace(/\n/g, "<br />")
            }}
          />
        </CardContent>
        <CardActions>
          <Button
            className={classes.button}
            size="large"
            color="primary"
            component={Link}
            to={"/scanner/" + this.props.id}
          >
            <div className={classes.textButton}>
              <span>Soutenir</span>
              <Icon className={classes.rightIcon}>
                card_giftcard
              </Icon>
            </div>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(Association);
