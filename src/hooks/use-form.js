import { useState } from 'react';
import { navigate } from 'gatsby';

export function useForm(initialState) {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join('&');
  }

  const [state, setState] = useState(initialState);

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

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
  function handleSubmit(e) {
    e.preventDefault();

    gtag_report_conversion();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  }

  return { handleSubmit, handleChange, state };
}
