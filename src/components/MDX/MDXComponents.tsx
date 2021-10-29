/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

import * as React from 'react';

import {H1, H2, H3, H4} from './Heading';
import HomepageHero from './HomepageHero';
import Link from './Link';

const P = (p: JSX.IntrinsicElements['p']) => (
  <p className="my-4 whitespace-pre-wrap" {...p} />
);

const Strong = (strong: JSX.IntrinsicElements['strong']) => (
  <strong className="font-bold" {...strong} />
);

const OL = (p: JSX.IntrinsicElements['ol']) => (
  <ol className="my-3 ml-6 list-decimal" {...p} />
);
const LI = (p: JSX.IntrinsicElements['li']) => (
  <li className="mb-1 leading-relaxed" {...p} />
);
const UL = (p: JSX.IntrinsicElements['ul']) => (
  <ul className="my-3 ml-6 list-disc" {...p} />
);

const Divider = () => (
  <hr className="block my-6 border-b border-border dark:border-border-dark" />
);

const Blockquote = ({
  children,
  ...props
}: JSX.IntrinsicElements['blockquote']) => {
  return (
    <>
      <blockquote
        className="relative flex px-8 py-4 my-8 leading-6 bg-opacity-50 rounded-lg shadow-inner mdx-blockquote bg-highlight dark:bg-highlight-dark"
        {...props}>
        <span className="relative block">{children}</span>
      </blockquote>
      <style jsx global>{`
        .mdx-blockquote > span > p:first-of-type {
          margin-bottom: 0;
        }
        .mdx-blockquote > span > p:last-of-type {
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  );
};

function Math({children}: {children: any}) {
  return (
    <span
      style={{
        fontFamily: 'STIXGeneral-Regular, Georgia, serif',
        fontSize: '1.2rem',
      }}>
      {children}
    </span>
  );
}

function MathI({children}: {children: any}) {
  return (
    <span
      style={{
        fontFamily: 'STIXGeneral-Italic, Georgia, serif',
        fontSize: '1.2rem',
      }}>
      {children}
    </span>
  );
}

export const MDXComponents = {
  p: P,
  strong: Strong,
  blockquote: Blockquote,
  ol: OL,
  ul: UL,
  li: LI,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  hr: Divider,
  a: Link,
  // The code block renders <pre> so we just want a div here.
  pre: (p: JSX.IntrinsicElements['div']) => <div {...p} />,
  // Scary: dynamic(() => import('./Scary')),
  HomepageHero,
  Math,
  MathI,
};
