import * as React from 'react';
import {Logo} from 'components/Logo';

export function Nav() {
  return (
    <header>
      <div className="relative bg-white">
        <div className="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="#">
              <span className="sr-only">Thank You For Spieling</span>
              <Logo className="w-auto h-8 sm:h-10" />
            </a>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false">
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: outline/menu */}
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
              Where to Listen
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
              Episodes
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
              Guests
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900">
              Misc
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
