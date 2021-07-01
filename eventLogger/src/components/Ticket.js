import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <p><em>{props.names}</em></p>
      <h3>{props.location } - {props.birdMake} - {props.birdModel}</h3>
      <h3>{props.birdColor} - {props.beakSize} - {props.beakColor}</h3>
      <hr />
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  birdMake: PropTypes.string,
  birdModel: PropTypes.string,
  birdColor: PropTypes.string,
  beakSize: PropTypes.string,
  beakColor: PropTypes.string,
};

export default Ticket;