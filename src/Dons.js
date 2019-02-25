import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Don from "./Don";
import api from "./api";

class Dons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dons: []
    };
  }

  componentDidMount() {
    api
      .getDons()
      .then(dons => {
        this.setState({ dons });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Typography gutterBottom variant="h2" component="h1">
          Dons
        </Typography>
        {this.state.dons.map(don => (
          <Don
            key={don.associationId}
            associationId={don.associationId}
            association={don.association}
            image={don.image}
            nombre={don.dons}
          />
        ))}
        <Button variant="contained" color="primary" component={Link} to={"/"}>
          Associations
        </Button>
      </div>
    );
  }
}

export default Dons;
