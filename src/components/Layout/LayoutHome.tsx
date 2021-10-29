import * as React from 'react';
import {MarkdownPage, MarkdownProps} from './MarkdownPage';
import {Page} from './Page';
import PodcastAppButtonLink from 'components/PodcastAppButtonLink';
import {IconBadgeSpotify} from 'components/Icon/IconBadgeSpotify';
import {IconBadgeApplePodcasts} from 'components/Icon/IconBadgeApplePodcasts';
import {IconBadgeGooglePodcasts} from 'components/Icon/IconBadgeGooglePodcasts';

interface PageFrontmatter {
  title: string;
  status: string;
}

interface LayoutHomeProps {
  meta: PageFrontmatter;
  children: React.ReactNode;
}

function LayoutHome({meta, children}: LayoutHomeProps) {
  return (
    <>
      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2" />
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="/images/hero.jpg"
              alt="Thank You For Spieling Podcast"
            />
          </div>
        </div>
      </div>

      {/* Logo Cloud */}
      <div className="bg-gray-100">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-wide text-center text-gray-500 uppercase">
            Listen on your favorite podcast app
          </p>
          <div className="grid grid-cols-1 gap-8 mt-6 lg:grid-cols-3">
            <div className="flex justify-center col-span-3 md:col-span-1">
              <PodcastAppButtonLink href="#" label="Listen on Apple Podcasts">
                <IconBadgeApplePodcasts className="h-16" />
              </PodcastAppButtonLink>
            </div>
            <div className="flex justify-center col-span-3 md:col-span-1">
              <PodcastAppButtonLink href="#" label="Listen on Spotify">
                <IconBadgeGooglePodcasts className="h-16" />
              </PodcastAppButtonLink>
            </div>
            <div className="flex justify-center col-span-3 md:col-span-1">
              <PodcastAppButtonLink href="#" label="Listen on Spotify">
                <IconBadgeSpotify className="h-16" />
              </PodcastAppButtonLink>
            </div>
            <div className="flex justify-center col-span-3 lg:pt-4 lg:col-span-3">
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm whitespace-nowrap bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border hover:from-purple-700 hover:to-indigo-700">
                Plus many others!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function AppShell(props: {children: React.ReactNode}) {
  return <Page {...props} />;
}

export default function withHome(meta: any) {
  function LayoutHomeWrapper(props: LayoutHomeProps) {
    return <LayoutHome {...props} meta={meta} />;
  }
  LayoutHomeWrapper.appShell = AppShell;
  return LayoutHomeWrapper;
}
