import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'gatsby';
import { ContactForm, Input, TextArea, Radio, Checkbox } from './form-elements';
import { socialLinks } from '../data';

function ContactPageForm() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  return (
    <article className="relative px-4 mx-4 md:mx-auto mt-24 sm:mt-40">
      <div className="relative w-full max-w-7xl px-4 py-12 mx-auto bg-black bg-opacity-50 border-4 border-white lg:my-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            style={{ letterSpacing: '0.7rem' }}
            className="text-2xl font-bold uppercase"
          >
            Contact Us
          </h2>
        </div>
        <div className="mt-12">
          <ContactForm
            handleSubmit={handleSubmit}
            register={register}
            setIsSubmitting={setIsSubmitting}
            setMessage={setMessage}
            action="/success/"
            name="contact-page-form"
            className="grid grid-cols-1 md:grid-cols-7 gap-24"
          >
            <div className="mt-4 hidden md:block md:col-span-3">
              <p className="tracking-widest">
                Rich <strong>0422 767 889</strong>
              </p>
              <p className="tracking-widest">
                Kez <strong>0402 322 131</strong>
              </p>
              <p className="mt-4 tracking-widest">
                Address: <strong>31 Jindalee Road</strong>
              </p>
              <p className="tracking-widest">
                <strong>Port Macquarie, NSW, Australia</strong>
              </p>
              <p className="mt-4 tracking-widest">
                Email: <strong>enquiries@nxtlvlfit.com.au</strong>
              </p>
              <p className="mt-16 tracking-widest">
                <strong>Follow us on</strong>
              </p>
              <ul className="mt-2 flex space-x-4 text-xl tracking-widest uppercase">
                {socialLinks.map((link) => (
                  <li key={link.id}>
                    <a href={link.url} className="inline-block rounded-full">
                      <span className="sr-only">{link.label}</span>
                      <link.icon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6 col-span-1 md:col-span-4">
              <Input
                name="full_name"
                label="Full name"
                register={register}
                errors={errors}
              />
              <Input
                name="contact_number"
                label="Contact number"
                type="tel"
                register={register}
                errors={errors}
              />
              <Input
                name="email_address"
                label="Email address"
                type="email"
                register={register}
                errors={errors}
              />
              <TextArea
                name="message"
                label="Message"
                register={register}
                errors={errors}
              />
              <div className="flex justify-end space-y-6 sm:space-x-4 sm:space-y-0">
                <span className="inline-flex shadow-sm">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center w-full px-6 py-3 font-bold tracking-widest uppercase border border-white rounded-none focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </span>
              </div>
              {message && (
                <p
                  dangerouslySetInnerHTML={{ __html: message }}
                  className="mt-6 prose text-center"
                />
              )}
            </div>
          </ContactForm>
        </div>
      </div>
    </article>
  );
}

export { ContactPageForm };
