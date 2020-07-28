import React from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'gatsby';
import { Form, Input, Radio, Checkbox } from './form-elements';

function ContactForm() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  return (
    <article className="relative px-4 mx-auto mt-24 sm:mt-40">
      <div className="relative w-full max-w-2xl px-4 py-12 mx-auto bg-black bg-opacity-50 border-4 border-white lg:my-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl font-bold tracking-widest uppercase">
            Exciting news!
          </h2>
          <p className="mt-2 tracking-widest uppercase">
            nXtLvL Functional Movement Centre is opening soon in Port Macquarie!
            Our team are excited to offer you a leading-edge facility where
            you're challenged and supported to chase nXtLvL goals.
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
            <Radio
              name="are_you_interested_in_membership"
              label="Are you interested in membership"
              register={register}
              errors={errors}
            />
            <Radio
              name="have_you_taken_part_in_crossfit_before"
              label="Have you taken part in Crossfit before"
              register={register}
              errors={errors}
            />
            <Radio
              name="have_you_taken_part_in_calisthenics_before"
              label="Have you taken part in Calisthenics before"
              register={register}
              errors={errors}
            />
            <Radio
              name="sign_up"
              label="Would you like to stay up to date with the latest nXtLvL Fitness news"
              register={register}
              errors={errors}
            />
            <div className="items-center justify-between space-y-6 sm:space-x-4 sm:flex sm:space-y-0">
              <Checkbox
                name="privacy_policy"
                label={
                  <>
                    By selecting this, you agree to the{' '}
                    <Link
                      to="/privacy-policy/"
                      className="inline-block underline"
                    >
                      Privacy Policy
                    </Link>
                  </>
                }
                register={register}
                errors={errors}
              />
              <span className="inline-flex shadow-sm">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-3 font-bold tracking-widest uppercase border border-white rounded-none focus:outline-none focus:shadow-outline"
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
