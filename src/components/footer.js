import React from 'react';

import { Link } from 'gatsby'

export function Footer() {
  return (
    <footer className="relative">
      <nav>
        <ul className="flex content-center tracking-widest uppercase"> 
          <li className="mt-12 mr-24">Links</li>
          <li className="mt-12 mr-24">Contact</li>
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
