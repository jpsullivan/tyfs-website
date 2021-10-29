import * as React from 'react';
import {Logo} from 'components/Logo';

function HomepageHero() {
  return (
    <>
      <div className="flex flex-col items-start justify-start flex-grow max-w-4xl mx-auto mt-8 mb-0 lg:mt-10 sm:mt-8 sm:mb-8 lg:mb-6 sm:flex-row sm:items-center">
        <Logo className="w-20 h-auto mb-4 mr-4 text-link dark:text-link-dark sm:w-28 sm:mb-0" />
        <div className="flex flex-wrap">
          <h1 className="flex mr-4 -mt-1 text-5xl font-bold leading-tight wrap text-primary dark:text-primary-dark">
            React Docs
          </h1>
          <div className="inline-flex self-center w-auto px-2 mt-1 text-base font-bold tracking-wide uppercase rounded bg-highlight dark:bg-highlight-dark text-link dark:text-link-dark whitespace-nowrap">
            Beta
          </div>
        </div>
      </div>
    </>
  );
}

export default HomepageHero;
