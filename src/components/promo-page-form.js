import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Link } from 'gatsby';
import { MailchimpForm, Input, Radio, Checkbox } from './form-elements';

function PromoPageForm() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
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
          <MailchimpForm
            handleSubmit={handleSubmit}
            register={register}
            setIsSubmitting={setIsSubmitting}
            setMessage={setMessage}
            action="/success/"
            name="mailchimp_form"
            className="grid grid-cols-1 gap-y-6"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Input
                name="first_name"
                label="First name"
                register={register}
                errors={errors}
              />
              <Input
                name="last_name"
                label="Last name"
                register={register}
                errors={errors}
              />
            </div>
            <Input
              name="contact_number"
              label="Phone number"
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
          </MailchimpForm>
        </div>
      </div>
    </article>
  );
}

export { PromoPageForm };
