import React from 'react';

import { Link } from 'gatsby'

export function Footer() {
  return (
    <footer className="relative">
      <nav>
        <ul className="flex items-center justify-center tracking-widest uppercase"> 
          <li className="mt-12 mr-24">Links
            <Links />
          </li>
          <li className="mt-12 mr-24">
            <Contact />
          </li>
          <li className="mt-12 mr-24">Join us</li>
        </ul>
      </nav>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mt-8">
          <p className="text-center uppercase">
            <a
              href="https://www.phirannodesigns.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website by Phiranno Designs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}


function Links(){
  return (
    <div>
      <ul>
        <li><Link to="/membership">Membership</Link></li>
        <li><Link to="/meet-us">Meet us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/classes">News</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <p>Rich 0422 767 889</p>
      <p>Kez 0402 322 131</p>
      <p>Address:</p>
      <p>Email:</p>
    </div>
  )
}