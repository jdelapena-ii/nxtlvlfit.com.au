import React from 'react'
import { Link } from 'gatsby'

export function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/meet-us">Meet Us</Link>
                    </li>
                    <li>
                        <Link to="/membership">Membership</Link>
                    </li>
                    <li>
                        <Link to="/timetable">Timetable</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}