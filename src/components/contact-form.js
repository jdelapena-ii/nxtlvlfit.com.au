import React from 'react';

import { useForm } from 'react-hook-form';
import { Form, Input, Radio } from './form-elements';

function ContactForm() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  return (
    <article className="relative px-4 mx-auto mt-24 sm:mt-40">
      <div className="relative w-full max-w-2xl px-4 py-12 mx-auto bg-black bg-opacity-50 border-4 border-white lg:my-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-semibold tracking-widest uppercase">
            You don't want to miss out
          </h2>
          <p className="mt-2 tracking-widest uppercase">
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
            className="grid grid-cols-1 row-gap-6"
          >
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
            <Radio
              name="are_you_interested_in_membership"
              label="Are you interested in membership"
              isFullWidth
              register={register}
              errors={errors}
            />
            <Radio
              name="have_you_taken_part_in_crossfit_before"
              label="Have you taken part in Crossfit before"
              isFullWidth
              register={register}
              errors={errors}
            />
            <Radio
              name="have_you_taken_part_in_calisthenics_before"
              label="Have you taken part in Calisthenics before"
              isFullWidth
              register={register}
              errors={errors}
            />
            <Radio
              name="sign_up"
              label="Would you like to stay up to date with the latest NXT LVL Fitness news"
              isFullWidth
              register={register}
              errors={errors}
            />
            <div className="col-start-2">
              <span className="inline-flex w-full shadow-sm">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-3 font-semibold tracking-widest uppercase border border-white rounded-none focus:outline-none focus:shadow-outline"
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
