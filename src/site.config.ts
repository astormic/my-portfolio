// Everything personal lives in this file. Edit it first.

export const site = {
  name: 'Amir Rahmani',
  role: 'Postdoctoral Research Associate, University of Cambridge',
  description:
    'Amir Rahmani: microscopy researcher at the University of Cambridge. Research, talks, reading and listening.',

  // Shown at the top of the home page. One string per paragraph.
  bio: [
    'I am a physicist who builds optical microscopes. I am a Postdoctoral Research Associate at the University of Cambridge, a College Research Associate at Wolfson College, and a visiting researcher at the British Antarctic Survey.',
    'My current work is on imaging living cells at near-freezing and sub-zero temperatures. Before that, during my PhD in Physics at the University of Leeds, I worked on single-molecule imaging flow cytometry and nanometre-precision focus stabilisation for super-resolution microscopy.',
  ],

  // Put your CV at public/cv.pdf and set this to '/cv.pdf' to show a
  // download link. Leave '' to hide it.
  cv: '',

  // Shown on the home page and in the footer. Add your own, for example:
  // { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=...' },
  links: [] as { label: string; href: string }[],

  experience: [
    {
      years: 'Oct 2025 to now',
      title: 'College Research Associate',
      place: 'Wolfson College, Cambridge',
      note: '',
    },
    {
      years: 'Oct 2025 to now',
      title: 'Postdoctoral Research Associate',
      place: 'University of Cambridge',
      note: '',
    },
    {
      years: 'Mar 2025 to now',
      title: 'Visiting Researcher',
      place: 'British Antarctic Survey, Cambridge',
      note: '',
    },
    {
      years: 'Mar 2025 to Sep 2025',
      title: 'Postdoctoral Research Assistant',
      place: 'University of Cambridge',
      note: '',
    },
    {
      years: 'Dec 2019 to May 2020',
      title: 'Visiting Researcher',
      place: 'ICFO, Barcelona, Spain',
      note: '',
    },
    {
      years: 'Jul 2018 to Jul 2019',
      title: 'Student',
      place: 'EMBL, Heidelberg, Germany',
      note: '',
    },
  ],

  education: [
    {
      years: 'Oct 2022 to Nov 2025',
      title: 'PhD, Physics',
      place: 'University of Leeds',
      note: '',
    },
    {
      years: 'Sep 2021 to Sep 2022',
      title: 'MSc, Physics',
      place: "King's College London",
      note: '',
    },
  ],

  teaching: [
    {
      years: '2025 to 2026',
      title: 'Teaching Assistant, Computational Skills: Python',
      place: 'University of Cambridge',
      note: '',
    },
    {
      years: '2022 to 2024',
      title: 'Teaching Assistant, Computational Skills: Python',
      place: 'University of Leeds',
      note: '',
    },
    {
      years: '2022 to 2024',
      title: 'Teaching Assistant, Introduction to Experimental Physics',
      place: 'University of Leeds',
      note: '',
    },
  ],

  awards: [
    {
      years: '2024',
      title: 'Journal of Cell Science Training Grant',
      place: 'The Company of Biologists, UK',
      note: '',
    },
    {
      years: '2021',
      title: 'EPSRC Doctoral Training Programme Studentship',
      place: 'UKRI, UK',
      note: '',
    },
    {
      years: '2019',
      title: 'Student Research Fellowship',
      place: 'ICFO, Spain',
      note: '',
    },
    {
      years: '2018',
      title: 'Ranked 7th nationwide, Iranian University Entrance Examination',
      place: 'Iran',
      note: '',
    },
    {
      years: '2017',
      title: 'Bronze Medal, 21st Iran National Physics Olympiad',
      place: 'Iran',
      note: '',
    },
  ],

  skills: [
    'Optical microscopy and microscope development',
    'Super-resolution microscopy and single-molecule tracking',
    'Immunostaining',
    'Python',
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
