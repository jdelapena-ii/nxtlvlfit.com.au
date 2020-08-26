import React from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';

function ContactForm({
  action = '/success/',
  children,
  className,
  handleSubmit,
  name = 'contact_form',
}) {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
  }

  function onSubmit(data, e) {
    e.preventDefault();
    const form = e.target;
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
  }

  return (
    <form
      name={name}
      action={action}
      method="POST"
      data-netlify
      onSubmit={handleSubmit(onSubmit)}
      className={className}
    >
      {children}
    </form>
  );
}

ContactForm.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export { ContactForm };
