import React from "react";
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
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Chicken Name' />
        <input
          type='text'
          name='location'
          placeholder='Location of bird sighting' />
        <input
          type='text'
          name='birdMake'
          placeholder='THe bird make' />
        <input
          type='text'
          name='birdModel'
          placeholder='The bird model' />
        <input
          type='text'
          name='birdColor'
          placeholder='What color is that bird' />
        <input
          type='text'
          name='beakSize'
          placeholder='How big is that beak' />
        <input
          type='text'
          name='beakColor'
          placeholder='Color of the beak' />
        <button type='submit'>Share that Chicken Sighting!</button>
      </form>
    </React.Fragment>
  )
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;