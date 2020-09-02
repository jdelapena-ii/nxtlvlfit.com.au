import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { ContactForm, Input, Select } from './form-elements';

function MembershipForm() {
  const { register, watch, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOther, setShowOther] = useState(false);

  const membershipType = watch('membership_type');

  return (
    <article className="relative px-4 sm:px-6 lg:px-8">
      <div aria-hidden id="membership-form" className="absolute -mt-20" />
      <div className="relative w-full max-w-xl px-4 py-12 mx-auto bg-black bg-opacity-50 border-2 border-white lg:my-12 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-insane">
            Join the team
          </h2>
        </div>
        <div className="mt-12">
          <ContactForm
            handleSubmit={handleSubmit}
            register={register}
            setIsSubmitting={setIsSubmitting}
            action="/success/"
            name="membership_form"
            className=""
          >
            <div className="space-y-6">
              <Input
                name="full_name"
                label="Full name"
                register={register}
                errors={errors}
              />
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
              <Select
                name="membership_type"
                label="Type of Membership"
                options={[
                  'Weekly gym membership',
                  'Weekly sauna membership',
                  'Unlimited gym & sauna membership',
                  'Other',
                ]}
                register={register}
                errors={errors}
                setShowOther={setShowOther}
              />

              {membershipType === 'Other' && (
                <Input
                  name="other_type"
                  label="Other Membership Type"
                  register={register}
                  errors={errors}
                />
              )}

              <div className="flex justify-end space-y-6 sm:space-x-4 sm:space-y-0">
                <span className="inline-flex shadow-sm">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center w-full px-6 py-3 font-bold tracking-widest uppercase transition duration-300 ease-in-out border border-white rounded-none hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    Submit
                  </button>
                </span>
              </div>
            </div>
          </ContactForm>
        </div>
      </div>
    </article>
  );
}

export { MembershipForm };
