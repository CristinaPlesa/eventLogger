import React from 'react';
import Ticket from './Ticket';
import PropTypes from "prop-types";



function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket) =>
        <Ticket
          whenTicketClicked = { props.onTicketSelection }
          names={ticket.names}
          location={ticket.location}
          birdMake={ticket.birdMake}
          birdModel={ticket.birdModel}
          birdColor={ticket.birdColor}
          beakSize={ticket.beakSize}
          beakColor={ticket.beakColor}
          id={ticket.id}
          key={ticket.id} />
      )}
    </React.Fragment>
  );
}
// Add propTypes for ticketList.
TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default TicketList;