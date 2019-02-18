import React, {Component} from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';

const styles = () => ({
  card: {
    display: 'flex',
    marginBottom: 15,
    minHeight: 200
  },
  cardImage: {
    height: 180,
    width: 450,
    backgroundSize: 'contain',
    alignSelf: 'center'
  },
  cardContent: {
    flexGrow: 1
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
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.nom}
          </Typography>
          <Typography component="p" dangerouslySetInnerHTML={{ __html: this.props.description.replace(/\n/g, '<br />')}}>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="large" color="primary" component={Link} to="/scanner">
            Soutenir
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(Association);