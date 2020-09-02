import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Menu, MenuButton, MenuList } from '@reach/menu-button';
import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { Banner } from './banner';
import { Logo } from './vectors';
import { useMainNavigation, socialLinks } from '../data';
import { MobileMenu } from './mobile-menu';

function NavBar() {
  const { mainNavigation } = useMainNavigation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState();
  return (
    <nav className="sticky inset-x-0 top-0 z-10 bg-black shadow-2xl">
      <Banner />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center justify-between flex-1">
            <div className="flex-shrink-0">
              <Link to="/" className="inline-block h-16 p-2 -ml-2">
                <Logo className="h-full" />
              </Link>
            </div>
            <div className="hidden lg:block lg:ml-6">
              <ul className="flex space-x-4 whitespace-no-wrap">
                {mainNavigation.map((navItem) =>
                  navItem.submenu ? (
                    <li key={navItem.id} className="flex">
                      <Menu>
                        {({ isExpanded }) => (
                          <SubMenu navItem={navItem} isExpanded={isExpanded} />
                        )}
                      </Menu>
                    </li>
                  ) : (
                    <li key={navItem.id} className="flex">
                      <Link
                        to={navItem.slug}
                        className="px-3 py-2 text-sm font-medium tracking-widest text-white uppercase hover:underline focus:underline"
                      >
                        {navItem.title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="hidden ml-6 sm:block lg:hidden xl:block">
              <ul className="flex items-center space-x-4">
                {socialLinks.map((link) => (
                  <li key={link.id} className="flex">
                    <a
                      href={link.url}
                      className="inline-block p-2 rounded-full"
                    >
                      <span className="sr-only">{link.title}</span>
                      <link.icon className="w-5 h-5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex -mr-2 lg:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Main menu"
                aria-expanded="false"
                className="inline-flex items-center justify-center p-2 text-white hover:bg-gray-900 focus:bg-gray-900"
              >
                {/* Icon when menu is closed. */}
                {/* Menu open: "hidden", Menu closed: "block" */}
                <svg
                  className="block w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Icon when menu is open. */}
                {/* Menu open: "block", Menu closed: "hidden" */}
                <svg
                  className="hidden w-6 h-6"
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
        </div>
      </div>
      {isMobileMenuOpen && (
        <MobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
      )}
    </nav>
  );
}

function SubMenu({ navItem, isExpanded = false }) {
  return (
    <>
      <MenuButton className="flex items-center px-3 py-2 space-x-2 text-sm font-medium tracking-widest text-white uppercase hover:underline focus:underline">
        {navItem.title}{' '}
        <motion.span
          aria-hidden
          focusable="false"
          initial={{ rotate: 0 }}
          animate={{ rotate: isExpanded ? 90 : 0 }}
          exit={{ rotate: 0 }}
          className="flex items-center justify-center"
        >
          <svg
            aria-hidden
            focusable={false}
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-4 h-4 text-white"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </motion.span>
      </MenuButton>
      <MenuList className="relative z-10 mt-4 transform outline-none -translate-x-1/4">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: '-0.25rem' },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="text-white uppercase bg-black border-2 border-white"
            >
              <nav className="py-3">
                <ul>
                  {navItem.submenu.map((submenu) => (
                    <li key={submenu.id} className="flex w-full">
                      <Link
                        to={
                          submenu.slug.current === '/services/'
                            ? submenu.slug.current
                            : `/services/${submenu.slug.current}/`
                        }
                        className="block px-6 py-2 text-sm font-medium tracking-widest text-white uppercase hover:underline focus:underline"
                      >
                        {submenu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </MenuList>
    </>
  );
}

SubMenu.propTypes = {
  navItem: PropTypes.object.isRequired,
  isExpanded: PropTypes.bool.isRequired,
};

export { NavBar };
