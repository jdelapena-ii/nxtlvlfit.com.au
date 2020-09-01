import PropTypes from 'prop-types';
import React from 'react';

import { Error } from './error';

function Select({ errors, label, name, options, register, required = true }) {
  if (options.length <= 0) return null;
  return (
    <div>
      {errors[name]?.message}
      <div className="relative shadow-sm">
        <label htmlFor={name}>
          <span className="sr-only">{label}</span>
          <select
            name={name}
            id={name}
            defaultValue=""
            required={required}
            ref={register({
              required: required ? (
                <Error message={`${label} is a required field`} />
              ) : (
                false
              ),
            })}
            className={`block w-full px-4 py-3 text-base tracking-widest text-white placeholder-white uppercase transition duration-300 ease-in-out bg-transparent border-white rounded-none form-select sm:text-sm ${
              errors[name]
                ? 'border-red-300 focus:border-red-300 focus:shadow-outline-red'
                : ''
            }`}
          >
            <option className="bg-black" value="" disabled>
              Membership type (please select)
            </option>
            {options.map((option) => (
              <option className="bg-black" value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  );
}

Select.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  required: PropTypes.bool,
  options: PropTypes.any,
};

export { Select };
