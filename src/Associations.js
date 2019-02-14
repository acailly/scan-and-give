import React, {Component} from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom'

const styles = () => ({
  associations: {
    padding: 15,
    backgroundColor: '#eeeeee'
  },
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

class Associations extends Component {


  render() {
    const {classes} = this.props;
    return (
      <div className={classes.associations}>
        <Typography gutterBottom variant="h2" component="h1">
          Associations
        </Typography>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardImage}
            image="logo_bretagnevivante.png"
            title="Live from space album cover"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              Bretagne Vivante
            </Typography>
            <Typography component="p">
              Consciente de ne pouvoir agir seule, Bretagne Vivante initie et contribue à de nombreux projets et démarches interassociatives, pour peser ensemble dans le débat public.
              <br/>Pour faire avancer la prise en compte de la nature, nous développons aussi de nombreux partenariats avec l’Etat, les collectivités, les entreprises, les écoles, les agriculteurs, etc.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" color="primary" component={Link} to="/scanner">
              Soutenir
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardImage}
            image="apf.png"
            title="Live from space album cover"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              APF France Handicap
            </Typography>
            <Typography component="p">
              APF France handicap propose, sur l’ensemble du territoire national, tous les types d’établissements et services pour accompagner l’inclusion de la personne en situation de handicap.
              <br/>Nous avons à cœur d’offrir aux personnes des réponses diversifiées, au plus près de leurs attentes.
              <br/>Nous privilégions un parcours inclusif pour tous, dans le respect des choix de vie de chacun.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" color="primary">
              Soutenir
            </Button>
          </CardActions>
        </Card>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardImage}
            image="action_contre_faim.png"
            title="Live from space album cover"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              Action contre la Faim
            </Typography>
            <Typography component="p">
              Action contre la Faim lutte contre la faim dans le monde. Sa mission est de sauver des vies en éliminant la faim par la prévention,
              <br/>la détection et le traitement de la sous-nutrition, en particulier pendant et après les situations d’urgence liées aux conflits et aux catastrophes naturelles.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" color="primary" >
              Soutenir
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Associations);