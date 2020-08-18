import React from 'react'
import { Link } from 'gatsby'

export function Header() {
    return (
        <header className="relative">
            <nav> 
                <ul>
                    <li className="mt-8">
                        <Link to="/meet-us">Meet Us</Link>
                    </li>
                    <li className="mt-8">
                        <Link to="/membership">Membership</Link>
                    </li>
                    <li className="mt-8">
                        <Link to="/timetable">Timetable</Link>
                    </li>
                    <li className="mt-8">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}