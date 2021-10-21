import React from 'react';
import PropTypes from 'react';

const TextInput = () => {
  let wrapperClass = 'form-group';
  if (props.error && props.error.length > 0) {
    wrapperClass += ' has-error';
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className='field'>
        <input
          id={props.id}
          type='text'
          name='title'
          onChange={props.onChange}
          className='form-control'
          value={props.value}
        />
      </div>
      {props.error && <div className='alert alert-danger'>{props.error}</div>}
    </div>
  );
  TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string,
  };
};

export default TextInput;
