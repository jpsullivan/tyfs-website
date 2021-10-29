import * as React from 'react';
import cn from 'classnames';
import NextLink from 'next/link';

interface PodcastAppButtonLinkProps {
  label?: string;
  target?: '_self' | '_blank';
}

export default function PodcastAppButtonLink({
  href,
  className,
  children,
  type = 'primary',
  size = 'md',
  label,
  target = '_self',
  ...props
}: JSX.IntrinsicElements['a'] & PodcastAppButtonLinkProps) {
  const classes = cn(className, 'hover:opacity-75');

  return (
    <NextLink href={href as string}>
      <a className={classes} {...props} aria-label={label} target={target}>
        {children}
      </a>
    </NextLink>
  );
}

PodcastAppButtonLink.displayName = 'PodcastAppButtonLink';
