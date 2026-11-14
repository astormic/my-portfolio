// Everything personal lives in this file. Edit it first.

export const site = {
  name: 'Your Name',
  role: 'PhD researcher in light microscopy',
  description:
    'Personal site of Your Name: research, outreach, reading and listening.',

  // Shown at the top of the home page. One string per paragraph.
  bio: [
    'I am a researcher at the University of Somewhere, where I build and use microscopes to study how cells organise themselves. Replace this paragraph with two or three sentences about what you work on and why.',
    'Before that I studied physics, and I still spend a lot of time on instrument design, image analysis and teaching.',
  ],

  // Put your CV at public/cv.pdf, or set this to '' to hide the link.
  cv: '/cv.pdf',

  links: [
    { label: 'Email', href: 'mailto:you@example.com' },
    { label: 'Google Scholar', href: 'https://scholar.google.com/' },
    { label: 'ORCID', href: 'https://orcid.org/' },
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],

  education: [
    {
      years: '2023 to now',
      title: 'PhD, Biophysics',
      place: 'University of Somewhere',
      note: 'Thesis on live-cell super-resolution imaging.',
    },
    {
      years: '2021 to 2022',
      title: 'MSc, Optics and Photonics',
      place: 'Another University',
      note: 'Distinction.',
    },
    {
      years: '2018 to 2021',
      title: 'BSc, Physics',
      place: 'Another University',
      note: '',
    },
  ],

  experience: [
    {
      years: '2022 to 2023',
      title: 'Research assistant',
      place: 'Imaging Facility, Institute Name',
      note: 'Ran the confocal and light-sheet instruments and trained new users.',
    },
    {
      years: 'Summer 2021',
      title: 'Research intern',
      place: 'Company or Lab Name',
      note: '',
    },
  ],

  skills: [
    'Confocal, light-sheet and super-resolution microscopy',
    'Python, Fiji and image analysis pipelines',
    'Optical design and alignment',
  ],

  media: {
    // The part after open.spotify.com/playlist/ in your playlist link.
    spotifyPlaylistId: '5mYVD8o8hVUkdXzKBtGPvz',
    // Your Letterboxd username, e.g. 'davidehrlich'. Leave '' to hide films.
    letterboxdUsername: 'AryaMehrbun',
    // How many films to show.
    filmCount: 12,
  },
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research/' },
  { label: 'Outreach', href: '/outreach/' },
  { label: 'Books', href: '/books/' },
  { label: 'Media', href: '/media/' },
];
