/**
 * EMNESIA CONTENT CONTROL PANEL
 *
 * Most visible text in the custom Emnesia UI lives in this file.
 * Change a value, save, and Astro will refresh the local preview.
 * Blog-post titles/body copy still live in src/content/blog/*.md or *.mdx.
 */

export const site = {
  logo: 'EMNESIA',
  tagline: 'personal internet archive // 2026',
  version: '0.2.2',

  nav: [
    { href: '/', label: 'Home', icon: 'home', tone: 'cyan' },
    { href: '/blog/', label: 'Blog', icon: 'blog', tone: 'amber' },
    { href: '/about/', label: 'About', icon: 'id', tone: 'lavender' },
    { href: '/links/', label: 'Links', icon: 'link', tone: 'mint' },
    { href: '/games/', label: 'Games', icon: 'game', tone: 'coral' },
    { href: '/tech/', label: 'Tech', icon: 'chip', tone: 'blue' },
  ],

  scenicBanner: {
    caption: 'EMNESIA // MEMORY WINDOW',
    alt: 'Purple moonlit landscape with a tower, green coast, and reflective water',
  },

  profile: {
    sectionTitle: 'USER IDENTIFICATION',
    cameraLabel: 'CAM_01',
    nameLabel: 'USER',
    name: 'EDDY',
    statusLabel: 'STATUS',
    status: 'ONLINE',
    accessLabel: 'ACCESS',
    access: 'PERSONAL',
    intro:
      'Hi — welcome to Emnesia. This is my little internet archive for whatever I’m thinking about, playing with, learning, writing, or obsessing over at the moment.',
  },

  latest: {
    title: 'LATEST TRANSMISSIONS',
    feedLabel: 'FEED',
    emptyTitle: 'NO TRANSMISSIONS YET',
    emptyNote: 'drop a post into src/content/blog/',
  },

  currently: {
    title: 'CURRENTLY',
    microLabel: 'LIVE INDEX',
    entries: [
      { label: 'PLAYING', value: 'replace me' },
      { label: 'WATCHING', value: 'replace me' },
      { label: 'READING', value: 'replace me' },
      { label: 'USING', value: 'replace me' },
      { label: 'THINKING ABOUT', value: 'replace me' },
    ],
    finalNote: 'obsession slot // 03',
  },

  status: {
    title: 'SITE STATUS',
    labels: {
      lastUpdated: 'LAST UPDATED',
      postCount: 'POST COUNT',
      version: 'SITE VERSION',
      state: 'STATE',
    },
    state: 'ONLINE',
  },

  archive: {
    title: 'MEMORY / ARCHIVE',
    microLabel: 'STORED FILES',
    yearLabel: 'YEAR',
    empty: 'MEMORY BANK EMPTY',
    openLabel: 'OPEN FULL ARCHIVE',
  },

  fixation: {
    title: 'CURRENT FIXATION',
    microLabel: 'OBJECT VIEWER',
    items: [
      { kind: 'OBJECT 01', name: 'replace with a fixation', note: 'image/object slot' },
      { kind: 'OBJECT 02', name: 'second fixation', note: 'swap in any image later' },
      { kind: 'OBJECT 03', name: 'third fixation', note: 'anything can live here' },
    ],
  },

  footer: {
    versionPrefix: 'EMNESIA v',
    updatedPrefix: 'UPDATED',
    rssLabel: 'RSS',
    contactLabel: 'CONTACT',
    endMessage: 'END OF TRANSMISSION',
  },

  pages: {
    about: {
      eyebrow: 'ABOUT / USER FILE',
      microLabel: 'DRAFT',
      title: 'About Emnesia',
      paragraphs: [
        'This page is deliberately simple for now. Once the homepage feels right, this becomes the longer-form profile and site-about area.',
        'For now, treat it as proof that the Emnesia chassis and navigation can carry across the rest of the website.',
      ],
    },
    games: {
      eyebrow: 'GAMES MODULE',
      microLabel: 'PLACEHOLDER',
      title: 'GAMES',
      paragraphs: [
        'This section exists so the navigation already works. We can art-direct and fill it properly after the homepage system is approved.',
      ],
    },
    links: {
      eyebrow: 'LINKS MODULE',
      microLabel: 'PLACEHOLDER',
      title: 'LINKS',
      paragraphs: [
        'This section exists so the navigation already works. We can art-direct and fill it properly after the homepage system is approved.',
      ],
    },
    tech: {
      eyebrow: 'TECH MODULE',
      microLabel: 'PLACEHOLDER',
      title: 'TECH',
      paragraphs: [
        'This section exists so the navigation already works. We can art-direct and fill it properly after the homepage system is approved.',
      ],
    },
    blog: {
      eyebrow: 'TRANSMISSION ARCHIVE',
      microLabel: 'ALL POSTS',
    },
  },
} as const;

export type EmnesiaSite = typeof site;
