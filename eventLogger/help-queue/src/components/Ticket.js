import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  <React.Fragment>
    <h3>{props.names}</h3>
    <h3>{props.location}</h3>
    <h3>{props.birdMake}</h3>
    <h3>{props.birdModel}</h3>
    <h3>{props.birdColor}</h3>
    <h3>{props.beakSize}</h3>
    <h3>{props.beakColor}</h3>
    <hr/>
  </React.Fragment>
}

Ticket.propTypes = {
  name: PropTypes.string.isRequired
  location: PropTypes
}