import React, { useRef, useState } from 'react';
import { Link } from 'gatsby';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { useOnClickOutside } from '../hooks';
import { Logo } from './vectors';
import { useMainNavigation } from '../data';

function MobileMenu({ isMobileMenuOpen, setMobileMenuOpen }) {
  const { mainNavigation } = useMainNavigation();

  function handleClose() {
    setMobileMenuOpen(false);
  }
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, handleClose);

  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <div
          key={isMobileMenuOpen}
          className="fixed inset-0 overflow-hidden lg:hidden"
        >
          <AnimatePresence>
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black bg-opacity-50"
            />
          </AnimatePresence>
          <div className="absolute inset-0 overflow-hidden">
            <article className="absolute inset-y-0 right-0 flex max-w-full pl-10">
              <AnimatePresence>
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ min: 0, max: 100, bounceDamping: 9 }}
                  className="w-screen max-w-md"
                >
                  <div
                    ref={ref}
                    className="flex flex-col h-full pb-6 overflow-y-scroll bg-black shadow-2xl"
                  >
                    <header className="px-4 sm:px-6">
                      <div className="flex items-center justify-between w-full h-20 space-x-3">
                        <Link to="/" onClick={handleClose}>
                          <Logo className="block w-auto h-12" />
                        </Link>
                        <div className="flex items-center">
                          <button
                            type="button"
                            onClick={handleClose}
                            aria-label="Close panel"
                            className="p-2 -mr-2 text-white transition duration-300 ease-in-out hover:bg-gray-900"
                          >
                            <svg
                              className="w-6 h-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </header>
                    <div className="relative flex-1 px-4 sm:px-6">
                      <div className="flex flex-col flex-grow py-6 overflow-y-auto">
                        <div className="flex flex-col flex-grow">
                          <nav className="flex-1 px-2 space-y-4 bg-black">
                            {mainNavigation.map((navItem) =>
                              navItem.submenu ? (
                                <SubMenu key={navItem.id} navItem={navItem} />
                              ) : (
                                <div key={navItem.id}>
                                  <Link
                                    to={navItem.slug}
                                    className="flex items-center w-full py-2 pr-2 text-xl font-medium tracking-widest text-white uppercase transition duration-300 ease-in-out group pl-7 hover:bg-gray-900 focus:outline-none focus:bg-gray-800"
                                  >
                                    {navItem.title}
                                  </Link>
                                </div>
                              )
                            )}
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </article>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

MobileMenu.propTypes = {
  isMobileMenuOpen: PropTypes.bool.isRequired,
  setMobileMenuOpen: PropTypes.func.isRequired,
};

function SubMenu({ navItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="flex items-center w-full py-2 pr-2 mt-1 text-xl font-medium tracking-widest text-white uppercase transition duration-300 ease-in-out group hover:bg-gray-900 focus:outline-none focus:bg-gray-800"
      >
        <motion.svg
          animate={{ rotate: isExpanded ? '90deg' : 0 }}
          className="w-5 h-5 mr-2 transition-colors duration-300 ease-in-out transform group-hover:text-gray-400 group-focus:text-gray-400"
          viewBox="0 0 20 20"
        >
          <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
        </motion.svg>
        {navItem.title}
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
            animate={{ height: 'auto', opacity: 1, overflow: 'visible' }}
            exit={{ height: 0, opacity: 0, overflow: 'hidden' }}
            transition={{ min: 0, max: 100, bounceDamping: 9 }}
            className="mt-1 space-y-4"
          >
            {navItem.submenu.map((submenu) => (
              <Link
                key={submenu.id}
                to={
                  submenu.slug.current === '/services/'
                    ? submenu.slug.current
                    : `/services/${submenu.slug.current}/`
                }
                className="flex items-center w-full py-2 pl-10 pr-2 text-xl font-medium tracking-widest text-white uppercase transition duration-300 ease-in-out group hover:bg-gray-900 focus:outline-none focus:bg-gray-800"
              >
                {submenu.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

SubMenu.propTypes = {
  navItem: PropTypes.object.isRequired,
};

export { MobileMenu };
