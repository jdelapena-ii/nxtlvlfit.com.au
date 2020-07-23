import React from 'react';
import { Link } from 'gatsby';

import { useForm } from 'react-hook-form';
import { Form, Input } from './form-elements';

function ContactForm() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  return (
    <article className="relative mx-auto mt-12">
      <div className="relative max-w-xl px-4 py-12 mx-auto border-4 border-white lg:my-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-semibold uppercase">
            You don't want to miss out
          </h2>
          <p className="mt-2 uppercase">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quo
            culpa quod. Neque nesciunt voluptates eum a hic nisi voluptatibus,
            aperiam, architecto ullam omnis atque quae laudantium quos
            voluptatem odit.
          </p>
        </div>
        <div className="mt-12">
          <Form
            handleSubmit={handleSubmit}
            register={register}
            action="/success/"
            name="contact-form"
            className="grid grid-cols-1 row-gap-6 sm:grid-cols-2 sm:col-gap-8"
          >
            <Input
              name="full_name"
              label="Full name"
              isFullWidth
              register={register}
              errors={errors}
            />
            <Input
              name="contact_number"
              label="Contact number"
              type="tel"
              isFullWidth
              register={register}
              errors={errors}
            />
            <Input
              name="email_address"
              label="Email address"
              type="email"
              isFullWidth
              register={register}
              errors={errors}
            />
            <div className="col-start-2">
              <span className="inline-flex w-full shadow-sm">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-3 font-semibold uppercase border border-white rounded-none focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </span>
            </div>
          </Form>
        </div>
      </div>
    </article>
  );
}

export { ContactForm };
