import * as React from 'react';
import {Nav} from './Nav/Nav';
interface PageProps {
  children: React.ReactNode;
}

export function Page({children}: PageProps) {
  return (
    <div className="h-auto lg:h-screen">
      <Nav />

      <main>{children}</main>
    </div>
  );
}
