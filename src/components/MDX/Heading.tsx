/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import cn from 'classnames';
import * as React from 'react';
import {forwardRefWithAs} from 'utils/forwardRefWithAs';
export interface HeadingProps {
  className?: string;
  isPageAnchor?: boolean;
  children: React.ReactNode;
  id?: string;
  as?: any;
}

const Heading = forwardRefWithAs<HeadingProps, 'div'>(function Heading(
  {as: Comp = 'div', className, children, id, isPageAnchor = true, ...props},
  ref
) {
  return (
    <>
      <Comp id={id} {...props} ref={ref} className={cn('heading', className)}>
        {children}
      </Comp>
      <style jsx>
        {`
          .heading {
            scroll-margin-top: 2.5em;
            /* Space for the anchor */
            padding-right: 1em;
          }
          .heading:before {
            height: 6rem;
            margin-top: -6rem;
            visibility: hidden;
            content: '';
          }
        `}
      </style>
    </>
  );
});

Heading.displayName = 'Heading';

export const H1 = ({className, ...props}: HeadingProps) => (
  <Heading
    as="h1"
    className={cn(className, 'text-5xl font-bold leading-tight')}
    {...props}
  />
);

export const H2 = ({className, ...props}: HeadingProps) => (
  <Heading
    as="h2"
    className={cn(
      'text-3xl leading-10 text-primary dark:text-primary-dark font-bold my-6',
      className
    )}
    {...props}
  />
);
export const H3 = ({className, ...props}: HeadingProps) => (
  <Heading
    as="h3"
    className={cn(
      className,
      'text-2xl leading-9 text-primary dark:text-primary-dark font-bold my-6'
    )}
    {...props}
  />
);

export const H4 = ({className, ...props}: HeadingProps) => (
  <Heading
    as="h4"
    className={cn(className, 'text-xl font-bold leading-9 my-4')}
    {...props}
  />
);
