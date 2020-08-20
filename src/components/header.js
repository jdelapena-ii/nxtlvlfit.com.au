import React from 'react'
import { Link, navigate } from 'gatsby'

import DropdownSelect from './dropdown-select'

// const onChange = (e) => navigate(e.target.value);

export function Header() {
    return (
        <header className="relative flex">
            <nav> 
                <ul className="flex content-center tracking-widest uppercase">
                    <li className="mt-12 mr-24">                                      
                        <DropdownSelect />                   
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

