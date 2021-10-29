import * as React from 'react';
import {H1} from './MDX/Heading';

interface PageHeadingProps {
  title: string;
  status?: string;
  description?: string;
}

export function PageHeading({title, status, description}: PageHeadingProps) {
  return (
    <div className="px-5 pt-5 sm:px-12">
      <div className="max-w-4xl ml-0 2xl:mx-auto">
        <H1 className="mt-0 text-primary dark:text-primary-dark -mx-.5" id="">
          {title}
          {status ? <em>—{status}</em> : ''}
        </H1>
        {description && (
          <p className="mt-4 mb-6 text-xl text-primary dark:text-primary-dark text-gray-90 leading-large">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
