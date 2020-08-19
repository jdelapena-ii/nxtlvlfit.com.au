import React from 'react'
import { Link } from 'gatsby'


export function Header() {
    return (
        <header className="relative flex content-center">
            <nav> 
                <ul className="flex items-center tracking-widest uppercase">
                    <li className="mt-12 mr-24">
                        <Link to="/">nXtLvL</Link>
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