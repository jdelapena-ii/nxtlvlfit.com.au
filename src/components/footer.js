import React from 'react';
import { Link } from 'gatsby';

import { mainNavigation, socialLinks } from '../data';
import { useGraphQL } from '../hooks';

export function Footer() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <footer className="relative px-4 py-12 bg-black bg-opacity-50 sm:px-6 lg:px-8">
      <div className="grid w-full max-w-3xl grid-cols-3 gap-4 mx-auto uppercase">
        <nav className="space-y-2">
          <h2 className="text-xl font-bold tracking-widest uppercase">Links</h2>
          <ul className="space-y-2">
            {mainNavigation.map((navItem) =>
              navItem.submenu ? null : (
                <li key={navItem.id}>
                  <Link to={navItem.slug}>{navItem.label}</Link>
                </li>
              )
            )}
          </ul>
        </nav>
        <nav className="space-y-2">
          <h2 className="text-xl font-bold tracking-widest uppercase">
            Contact
          </h2>
          <ul className="space-y-2 normal-case">
            <li>
              <dl>
                <dt className="inline">Rich: </dt>
                <dd className="inline">{siteMetadata.phone.rich}</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt className="inline">Kez: </dt>
                <dd className="inline">{siteMetadata.phone.kez}</dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt className="inline">Address: </dt>
                <dd className="inline">
                  {siteMetadata.address.street} <br />
                  {siteMetadata.address.suburb} {siteMetadata.address.state}
                </dd>
              </dl>
            </li>
            <li>
              <dl>
                <dt className="inline">Email: </dt>
                <dd className="inline">{siteMetadata.email}</dd>
              </dl>
            </li>
          </ul>
          <ul className="flex space-x-4 text-xl tracking-widest uppercase">
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
        <nav className="space-y-2">
          <h2 className="text-xl font-bold tracking-widest uppercase">
            Join Us
          </h2>
          <button
            type="button"
            className="w-full px-8 py-2 text-sm tracking-widest uppercase border-2 border-white"
          >
            Sign up
          </button>
        </nav>
      </div>

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
    </footer>
  );
}
