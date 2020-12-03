import React from 'react';
import PropTypes from 'prop-types';
import { ContainedButton } from '../UIComponents'

function SuccessDisplay({ message, onClick }) {
  return (
    <>
      <i className="far fa-check-circle fa-4x" />
      <br />
      <br />
      <p>{message}</p>

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <ContainedButton onClick={onClick}>OK</ContainedButton>
      </div>
    </>
  )
}

export default SuccessDisplay

SuccessDisplay.propTypes = {
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};