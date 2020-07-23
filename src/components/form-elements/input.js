import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

export function Input({
  isFullWidth,
  label,
  name,
  required = true,
  type = 'text',
  register,
  errors,
}) {
  const minLength = type === 'tel' ? 8 : 2;
  return (
    <div className={isFullWidth ? 'sm:col-span-2' : ''}>
      {errors[name]?.message}
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        <span className="sr-only">{label}</span>
      </label>
      <div className="relative mt-1 shadow-sm">
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={label}
          aria-invalid={errors[name] ? 'true' : 'false'}
          ref={register({
            required: <Error message={`${label} cannot be empty`} />,
            minLength: {
              value: minLength,
              message: (
                <Error
                  message={`${label} must be at least ${minLength} characters`}
                />
              ),
            },
          })}
          className={`block w-full px-4 py-3 text-white placeholder-white uppercase transition duration-150 ease-in-out bg-transparent border-white rounded-none form-input ${
            errors[name]
              ? 'border-red-300 focus:border-red-300 focus:shadow-outline-red'
              : ''
          }`}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  errors: PropTypes.object,
  isFullWidth: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string,
};
