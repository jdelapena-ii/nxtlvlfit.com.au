import React from 'react';
import { Link } from 'gatsby';

import { Logo } from './vectors';
import { mainNavigation, socialLinks } from '../data';
import { useGraphQL } from '../hooks';

export function Footer() {
  const {
    site: { siteMetadata },
  } = useGraphQL();
  return (
    <footer className="relative flex flex-col px-4 py-12 space-y-12 bg-black bg-opacity-50 sm:px-6 lg:px-8">
      <Link to="/" className="inline-flex justify-center h-20 mx-auto sm:h-24">
        <Logo className="h-full" />
      </Link>
      <div className="grid w-full max-w-3xl gap-6 mx-auto space-y-4 text-center uppercase sm:space-y-0 sm:grid-cols-2 md:grid-cols-3 sm:text-left">
        <nav className="space-y-2">
          <h2 className="text-xl font-bold tracking-widest uppercase">Links</h2>
          <ul className="space-y-2">
            {mainNavigation.map((navItem) =>
              navItem.submenu ? null : (
                <li key={navItem.id}>
                  <Link
                    to={navItem.slug}
                    className="tracking-widest hover:underline"
                  >
                    {navItem.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
        <nav className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-widest uppercase">
              Contact
            </h2>
            <dl className="space-y-4 normal-case">
              <div>
                <div className="tracking-widest">
                  <dt className="inline">Rich </dt>
                  <dd className="inline font-bold">
                    <a href={`tel:${siteMetadata.phone.rich}`}>
                      {siteMetadata.phone.rich}
                    </a>
                  </dd>
                </div>
                <div className="tracking-widest">
                  <dt className="inline">Kez </dt>
                  <dd className="inline font-bold">
                    <a href={`tel:${siteMetadata.phone.kez}`}>
                      {siteMetadata.phone.kez}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="tracking-widest">
                <dt className="inline">Address: </dt>
                <dd className="inline font-bold">
                  {siteMetadata.address.street} <br />
                  {siteMetadata.address.suburb}, {siteMetadata.address.state}
                </dd>
              </div>
              <div className="tracking-widest">
                <dt className="inline">Email: </dt>
                <dd className="inline font-bold">
                  <a href={`mailto:${siteMetadata.email}`}>
                    {siteMetadata.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </nav>

        <nav className="space-y-2 text-center md:pt-0 sm:pt-8 sm:col-span-2 md:col-span-1">
          <div className="space-y-2">
            <h2 className="text-xl font-bold tracking-widest uppercase">
              Join Us
            </h2>
            <button
              type="button"
              className="w-full max-w-xs px-8 py-2 text-sm tracking-widest uppercase border-2 border-white"
            >
              Sign up
            </button>
          </div>
        </nav>
      </div>

      <div className="pt-8 space-y-4">
        <ul className="flex justify-center space-x-4 text-xl tracking-widest uppercase">
          {socialLinks.map((link) => (
            <li key={link.id}>
              <a href={link.url} className="inline-block rounded-full">
                <span className="sr-only">{link.label}</span>
                <link.icon />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-center uppercase">
          <a
            href="https://www.phirannodesigns.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Website by Phiranno Designs
          </a>
        </p>
      </div>
    </footer>
  );
}
