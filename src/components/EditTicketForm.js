import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTicketForm(props) {
  const { ticket } = props;

  function handleEditTicketFormSubmission(event) {
    event.preventDefault();
    props.onEditTicket({
      names: event.target.names.value,
      location: event.target.location.value,
      birdMake: event.target.birdMake.value,
      birdModel: event.target.birdModel.value,
      birdColor: event.target.birdColor.value,
      beakSize: event.target.beakSize.value,
      beakColor: event.target.birdMake.beakColor,
      id: ticket.id
      // key: ticket.id
    });
  }
  
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditTicketFormSubmission}
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onEditTicket: PropTypes.func
};

export default EditTicketForm;