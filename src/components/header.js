import React from 'react'
import { Link, navigate } from 'gatsby'


const onChange = (e) => navigate(e.target.value);

export function Header() {
    return (
        <header className="relative flex">
            <nav> 
                <ul className="flex content-center tracking-widest uppercase">
                    <li className="mt-12 mr-24">                                      
                        <div>
                            <select 
                                onChange={onChange}
                                defaultValue="NXTLVL"
                            >    
                                <option value="/facility">nXtLvL Facility</option>
                                <option value="/services">nXtLvL Services</option>
                                <option value="/classes">nXtLvl Classes</option>
                            </select>
                        </div>                    
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