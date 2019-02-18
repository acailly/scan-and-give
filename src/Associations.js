import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import axios from 'axios';
import Association from "./Association";

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

  constructor(props) {
    super(props);
    this.state = {
      associations: []
    }
  }

  componentDidMount() {
    axios.get('/api/associations').then(response => {
      this.setState({associations: response.data})
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    const {classes} = this.props;
    return (
      <div className={classes.associations}>
        <Typography gutterBottom variant="h2" component="h1">
          Associations
        </Typography>
        {this.state.associations.map(a => <Association key={a.id} nom={a.nom} image={a.image}
                                                       description={a.description}/>)}
      </div>
    )
  }
}

export default withStyles(styles)(Associations);