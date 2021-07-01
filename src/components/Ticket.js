import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.whenTicketClicked(props.id)}>
        <p><em>Name  {props.names}</em></p>
        <h3>Location = {props.location } - BirdMake = {props.birdMake} - BirdModel = {props.birdModel}</h3>
        <h3>BirdColor = {props.birdColor} - BeakSize = {props.beakSize} - BeakColor = {props.beakColor}</h3>
        <hr />
      </div>
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
  whenTicketClicked: PropTypes.func // new PropType
};

export default Ticket;