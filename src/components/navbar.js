import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { Menu, MenuButton, MenuList } from '@reach/menu-button';

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
              <SubMenu key={navItem.id} navItem={navItem} />
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

function SubMenu({ navItem }) {
  return (
    <li>
      <Menu>
        <MenuButton className="uppercase">
          {navItem.label} <span aria-hidden>▾</span>
        </MenuButton>
        <MenuList className="relative z-10 mt-4 text-white uppercase bg-black border-2 border-white outline-none">
          <nav className="py-1">
            <ul>
              {navItem.submenu.map((submenu) => (
                <li key={submenu.id}>
                  <Link to={submenu.slug} className="px-3 py-1">
                    {submenu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </MenuList>
      </Menu>
    </li>
  );
}

SubMenu.propTypes = {
  navItem: PropTypes.object.isRequired,
};

export { NavBar };
