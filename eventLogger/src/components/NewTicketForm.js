import React from "react";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewTicketForm(props) {

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: event.target.names.value,
      location: event.target.location.value,
      birdMake: event.target.birdMake.value,
      birdModel: event.target.birdModel.value,
      birdColor: event.target.birdColor.value,
      beakSize: event.target.beakSize.value,
      beakColor: event.target.beakColor.value,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;