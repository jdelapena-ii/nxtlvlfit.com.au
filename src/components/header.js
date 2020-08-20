import React from 'react'
import { Link, navigate } from 'gatsby'

import DropdownSelect from './dropdown-select'
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuPopover,
    MenuLink,
    MenuList
  } from '@reach/menu-button';

// const onChange = (e) => navigate(e.target.value);

export function Header() {
    return (
        <header className="relative flex">
            <nav> 
                <ul className="flex content-center tracking-widest uppercase">
                    <li className="mt-12 mr-24">                                      
                        <NxtlvlSubMenu />                   
                    </li>
                    <li className="mt-12 mr-24">
                        <Link to="/meet-us">Meet Us</Link>
                    </li>
                    <li className="mt-12 mr-24">
                        <Link to="/membership">Membership</Link>
                    </li>
                    <li className="mt-12 mr-24">
                        <Link to="/timetable">Timetable</Link>
                    </li>
                    <li className="mt-12 mr-24">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

function NxtlvlSubMenu() {
    return (
      <Menu className="overflow-hidden font-bold">
        <MenuButton>
          NXTLVL <span aria-hidden>▾</span>
        </MenuButton>
        <MenuList className="text-white uppercase">
          <MenuLink as="a" href="/facility">nXtLvL Facility</MenuLink>
          <MenuLink as="a" href="/services">nXtLvL Services</MenuLink>
          <MenuLink as="a" href="/classes">nXtLvL Classes</MenuLink>
        </MenuList>
      </Menu>
    );
  }