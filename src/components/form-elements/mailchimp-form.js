import React from 'react';
import { navigate } from 'gatsby';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import PropTypes from 'prop-types';

function MailchimpForm({
  action = '/success/',
  children,
  className,
  handleSubmit,
  name = 'contact_form',
  setIsSubmitting,
  setMessage,
}) {
  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof url != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
      send_to: 'AW-591313295/MPM9CJSx6N4BEI_z-pkC',
      event_callback: callback,
    });
    return false;
  }
  const onSubmit = (data, event) => {
    event.preventDefault();

    gtag_report_conversion();
    const form = event.target;
    setIsSubmitting(true);

    const subData = {
      FNAME: data.first_name,
      LNAME: data.last_name,
      PHONE: data.contact_number,
      MEMBERSHIP: data.are_you_interested_in_membership,
      CROSSFIT: data.have_you_taken_part_in_crossfit_before,
      CALISTHENI: data.have_you_taken_part_in_calisthenics_before,
      SIGN_UP: data.sign_up,
    };

    if (data.have_you_taken_part_in_crossfit_before === 'yes')
      subData['group[10928][1]'] = '1';
    if (data.have_you_taken_part_in_calisthenics_before === 'yes')
      subData['group[10928][2]'] = '2';

    addToMailchimp(data.email_address, subData)
      .then(({ msg, result }) => {
        if (result !== 'success') {
          throw msg;
        }
        setMessage(msg);
        navigate(form.getAttribute('action'));
      })
      .catch((err) => {
        setMessage(err);
        setIsSubmitting(true);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action={action}
      className={className}
      method="POST"
      name={name}
    >
      {children}
    </form>
  );
}

MailchimpForm.propTypes = {
  action: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  name: PropTypes.string,
  setIsSubmitting: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
};

export { MailchimpForm };
