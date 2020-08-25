import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { Menu, MenuButton, MenuList } from '@reach/menu-button';
import { AnimatePresence, motion } from 'framer-motion';

import { mainNavigation, socialLinks } from '../data';
import { LogoWithText } from './vectors';

function NavBar() {
  return (
    <header className="sticky inset-x-0 top-0 z-10 flex items-center w-full px-4 overflow-hidden bg-black shadow-2xl sm:px-6 lg:px-8">
      <nav className="flex items-center h-20 mx-auto space-x-12 whitespace-no-wrap">
        <Link to="/">
          <LogoWithText className="h-12" />
        </Link>
        <ul className="flex w-full space-x-12 leading-none tracking-widest">
          {mainNavigation.map((navItem) =>
            navItem.submenu ? (
              <li key={navItem.id}>
                <Menu>
                  {({ isExpanded }) => (
                    <SubMenu navItem={navItem} isExpanded={isExpanded} />
                  )}
                </Menu>
              </li>
            ) : (
              <li key={navItem.id}>
                <Link to={navItem.slug} className="uppercase">
                  {navItem.label}
                </Link>
              </li>
            )
          )}
        </ul>
        <ul className="flex w-full space-x-4 text-xl tracking-widest uppercase">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.url} className="inline-block rounded-full">
                <span className="sr-only">{link.label}</span>
                <link.icon />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function SubMenu({ navItem, isExpanded = false }) {
  return (
    <>
      <MenuButton className="flex items-center space-x-2 uppercase">
        {navItem.label}{' '}
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
      <MenuList className="relative z-10 mt-4 transform outline-none -translate-x-1/3">
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
                    <li key={submenu.id}>
                      <Link
                        to={submenu.slug}
                        className="inline-block w-full px-6 py-2"
                      >
                        {submenu.label}
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
