import React, { Component } from "react";
import Don from "./Don";
import api from "./api";
import { withStyles } from "@material-ui/core";

const styles = () => ({
  dons: {
    padding: 15,
    backgroundColor: "#383839"
  }
});

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
    const { classes } = this.props;
    return (
      <div className={classes.dons}>
        {this.state.dons.map(don => (
          <Don
            key={don.associationId}
            associationId={don.associationId}
            association={don.association}
            image={don.image}
            nombre={don.dons}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Dons);
