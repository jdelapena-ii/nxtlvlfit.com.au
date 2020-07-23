import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';

import { Honeypot } from './honeypot';

function Form({
  action = '/success/',
  children,
  className,
  handleSubmit,
  name = 'contact_form',
  register,
}) {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
  }

  const onSubmit = (data, event) => {
    event.preventDefault();
    const form = event.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...data,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit(onSubmit)}
      action={action}
      className={className}
      method="POST"
      name={name}
    >
      <Honeypot register={register} />
      {children}
    </form>
  );
}

Form.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  register: PropTypes.func.isRequired,
};

export { Form };
