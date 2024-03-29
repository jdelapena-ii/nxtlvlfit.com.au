import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Error } from './error';
import { YesIcon, NoIcon } from '../vectors';

function Checkbox({ label, name, register, errors }) {
  const [selection, setSelection] = useState(false);
  return (
    <div>
      {errors[name]?.message}
      <fieldset>
        <div className="flex items-center justify-between space-x-4">
          <div className="flex-shrink-0 mt-2 space-x-4 sm:mt-0">
            <label
              htmlFor={name}
              className="inline-flex items-center space-x-1.5"
            >
              <span
                className={`inline-flex leading-none items-center justify-center w-8 h-8 text-sm tracking-widest uppercase border border-white font-bold transition duration-300 ease-in-out focus-within:shadow-outline ${
                  selection ? 'bg-white text-black' : 'text-white bg-black'
                }`}
              >
                <input
                  type="checkbox"
                  id={name}
                  value={selection ? 'agree' : 'disagree'}
                  name={name}
                  ref={register({
                    required: <Error message="This field is required" />,
                  })}
                  onClick={() => setSelection((prev) => !prev)}
                  className="sr-only"
                />
                <span aria-label="Agree/Disagree">
                  {selection ? (
                    <YesIcon className="w-4 h-4" />
                  ) : (
                    <NoIcon className="w-4 h-4" />
                  )}
                </span>
              </span>
            </label>
          </div>
          <legend className="text-sm tracking-widest">{label}</legend>
        </div>
      </fieldset>
    </div>
  );
}

Checkbox.propTypes = {
  errors: PropTypes.object,
  label: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
};

export { Checkbox };
