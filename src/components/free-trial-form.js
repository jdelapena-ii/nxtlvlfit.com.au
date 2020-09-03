import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';

import { ContactForm, Input } from './form-elements';
import { useOnClickOutside } from '../hooks';

const formName = 'free_trial_form';

function FreeTrailForm({ isOpen, setOpen }) {
  const handleClose = () => setOpen(false);

  const ref = useRef();

  useOnClickOutside(ref, handleClose);

  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={isOpen}
            className="fixed inset-0 z-40 flex items-start justify-center px-4 pt-24 pb-4 bg-black bg-opacity-75 sm:px-6 lg:px-8"
          >
            <div>
              <motion.div
                ref={ref}
                aria-label="Free trial form"
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex={0}
                role="region"
                initial={{ y: '50%' }}
                animate={{ y: '0%' }}
                exit={{ y: '50%' }}
                transition={{ min: 0, max: 100, bounceDamping: 9 }}
                className="relative w-full max-w-lg px-4 py-12 mx-auto bg-black border-2 border-white lg:my-12 sm:px-6 lg:px-8 focus:outline-none focus:shadow-outline"
              >
                <div className="space-y-6 text-center">
                  <h2 className="text-2xl font-bold tracking-widest uppercase sm:tracking-insane">
                    Start Your Free Trial Today
                  </h2>
                </div>
                <div className="mt-12">
                  <ContactForm
                    handleSubmit={handleSubmit}
                    register={register}
                    setIsSubmitting={setIsSubmitting}
                    action="/success/"
                    name={formName}
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
              </motion.div>
            </div>
          </motion.article>
        )}
      </AnimatePresence>
      <DummyForm />
    </>
  );
}

FreeTrailForm.propTypes = {
  isOpen: PropTypes.bool,
  setOpen: PropTypes.func,
};

function DummyForm() {
  return (
    <form name={formName} hidden data-netlify netlify-honeypot="bot-field">
      <input type="hidden" name="full_name" value={formName} />
      <input type="hidden" name="contact_number" value={formName} />
      <input type="hidden" name="email_address" value={formName} />
      <div hidden>
        <label htmlFor="bot-field">
          Don’t fill this out: <input id="bot-field" name="bot-field" />
        </label>
      </div>
    </form>
  );
}

export { FreeTrailForm };
