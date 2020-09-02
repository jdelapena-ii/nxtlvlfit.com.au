import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

function TextArea({
  label,
  name,
  required = true,
  type = 'text',
  register,
  errors,
}) {
  const minLength = type === 'tel' ? 8 : 2;
  return (
    <div>
      {errors[name]?.message}
      <label
        htmlFor={name}
        className="block font-bold tracking-widest text-gray-700"
      >
        <span className="sr-only">{label}</span>
      </label>
      <div className="relative mt-1 shadow-sm">
        <textarea
          id={name}
          rows="6"
          name={name}
          type={type}
          required={required}
          placeholder={`${label}${required ? '*' : ''}`}
          aria-invalid={errors[name] ? 'true' : 'false'}
          ref={register({
            required: <Error message={`${label} is a required field`} />,
            minLength: {
              value: minLength,
              message: (
                <Error
                  message={`${label} must be at least ${minLength} characters`}
                />
              ),
            },
          })}
          className={`block w-full px-4 py-3 text-base tracking-widest text-white placeholder-white uppercase transition duration-300 ease-in-out bg-transparent border-white rounded-none form-input sm:text-sm ${
            errors[name]
              ? 'border-red-300 focus:border-red-300 focus:shadow-outline-red'
              : ''
          }`}
        />
      </div>
    </div>
  );
}

TextArea.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
};

export { TextArea };
