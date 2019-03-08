import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";

const styles = () => ({
    titre: {
      color: "#00a94e"
    },
    content: {
      paddingRight: 30
    },
    cardImageContainer: {
      flex: '1 0 330px',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center'
    },
    card: {
      borderRadius: 10,
      width: '100%',
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
      height: 180,
    },
    cardContent: {
      flexGrow: 1
    }
    ,
    rightIcon: {
      marginLeft: 8,
      color:
        "#C00"
    }
    ,
    button: {
      color: "#C00"
    }
    ,
    textButton: {
      display: "flex",
      flexDirection:
        "column",
      alignItems:
        "center"
    }
  })
;

class Association extends Component {
  state = {
    associations: []
  };

  render() {
    const {classes} = this.props;
    return (
      <ButtonBase focusRipple component={Link} to={"/scanner/" + this.props.id}>
        <div className={classes.card}>
          <div className={classes.cardImageContainer}>
            <img
              className={classes.cardImage}
              src={this.props.image}
              alt={this.props.nom}
            />
          </div>
          <div className={classes.cardContent}>
            <h2 className={classes.titre}>{"SOUTENIR " + this.props.nom}</h2>
            <Typography
              component="p"
              className={classes.content}
              dangerouslySetInnerHTML={{
                __html: this.props.description.replace(/\n/g, "<br />")
              }}
            />
          </div>
        </div>
      </ButtonBase>
    );
  }
}

export default withStyles(styles)(Association);
