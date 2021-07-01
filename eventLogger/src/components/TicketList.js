import React from 'react';
import Ticket from './Ticket';
import PropTypes from "prop-types";



function TicketList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.ticketList.map((ticket, index) =>
        <Ticket
          names={ticket.names}
          location={ticket.location}
          birdMake={ticket.birdMake}
          birdModel={ticket.birdModel}
          birdColor={ticket.birdColor}
          beakSize={ticket.beakSize}
          beakColor={ticket.beakColor}
          key={index} />
      )}
    </React.Fragment>
  );
}
// Add propTypes for ticketList.
TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;