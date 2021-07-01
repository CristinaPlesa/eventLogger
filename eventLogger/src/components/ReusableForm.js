import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
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
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;
