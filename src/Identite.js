import React, {Component} from "react";
import {Link} from "react-router-dom";

class Identite extends Component {

  state = {
    lastname: '',
    firstname: '',
    company: '',
    email: '',
    ticketType: ''
  };

  componentDidMount() {
    const hash = this.props.history.location.state.code.replace(/"/g, "").split(',');
    this.setState({lastname: hash[0]});
    this.setState({firstname: hash[1]});
    this.setState({company: hash[2]});
    this.setState({email: hash[3]});
    this.setState({ticketType: hash[4]});
  }

  render() {
    return (
      <div>
        Bonjour {this.state.lastname} {this.state.firstname}<br/>
        de {this.state.company}<br/>
        tu receveras par mail {this.state.email}<br/>
        {this.state.ticketType}<br/>
        C'est par <Link to="associations">ici</Link> pour continuer
      </div>
    )
  }
}

export default Identite;