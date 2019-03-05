import { Component } from "react";
import { withStyles } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import React from "react";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";

const styles = () => ({
  zenikanard: {
    height: 180,
    marginRight: 40
  },
  header: {
    fontSize: 64,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#2b2c2c",
    justifyContent: "center",
    paddingTop: "10px"
  },
  title: {
    color: "#4e7b53",
    textShadow:
      "0 0 5px #fff, 0 0 10px #fff, 0 0 20px #4e7b53, 0 0 30px #4e7b53, 0 0 40px #4e7b53, 0 0 55px #4e7b53, 0 0 75px #4e7b53"
  },
  button: {
    color: "#c31436"
  }
});
class Header extends Component {
  render() {
    const { classes, location } = this.props;
    return (
      <div className={classes.header}>
        <Link to="/">
          <img
            src="/zenikanard2.png"
            alt="zenikanard"
            className={classes.zenikanard}
          />
        </Link>
        <span className={classes.title}>Breizh Give</span>
        <div>
          <Button
            className={classes.button}
            size="large"
            color="primary"
            component={Link}
            to={location.pathname === "/dons" ? "/" : "/dons"}
          >
            <Icon>bar_chart</Icon>
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(Header));
