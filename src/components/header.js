import React from 'react'
import { Link } from 'gatsby'

import {
    Menu,
    MenuButton,
    MenuLink,
    MenuList
  } from '@reach/menu-button';

export function Header() {
    return (
        <header className="relative z-40 flex items-center justify-center">
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
      <Menu>
        <MenuButton>
          NXTLVL <span aria-hidden>▾</span>
        </MenuButton>
        <MenuList className="text-white uppercase">
            <ul>
                <li><Link as="a" to="/facility">nXtLvL Facility</Link></li>
                <li><Link as="a" to="/services">nXtLvL Services</Link></li>
                <li><Link as="a" to="/classes">nXtLvL Classes</Link></li>
            </ul>
        </MenuList>
      </Menu>
    );
  }