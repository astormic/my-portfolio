// Everything personal lives in this file. Edit it first.

export const site = {
  name: 'Amir Rahmani',
  // Shown with the logo at the top of every page.
  brand: 'Zarrenama',
  // Logo shown in the footer. The image is src/assets/cambridge-ceb-logo.png.
  institute: {
    name: 'University of Cambridge, Department of Chemical Engineering and Biotechnology',
    href: 'https://www.ceb.cam.ac.uk/',
  },
  // Shown at the end of the home page, under "About Zarrenama".
  brandMeaning: [
    'Zarrenama (ذره‌نما) is a Persian word. Zarre is a particle: the old word for the specks of dust you see drifting in a beam of sunlight. Nama means "that which shows". Together it reads as "the particle-revealer", something that makes the very small visible, which is what a microscope does.',
    'The logo is traced from one of my own fluorescence images of cells.',
  ],
  role: 'Postdoctoral Research Associate, University of Cambridge',
  description:
    'Amir Rahmani: Researcher at the University of Cambridge. Research, news, reading and listening.',

  // Shown at the top of the home page. One string per paragraph.
  bio: [
    'I am a physicist with interest in imaging individual molecules and quantum biology. I am currently a Postdoctoral Research Associate in the Laser Analytics Group at the University of Cambridge, a College Research Associate at Wolfson College, and a visiting researcher at the British Antarctic Survey.',
    'My current work is on understanding the membrane of living cells at near-freezing and sub-zero temperatures. Before that, during my PhD in Physics at the University of Leeds, I worked on single-molecule flow cytometry and nanometre-precision focus stabilisation for super-resolution microscopy.',
  ],

  // Put your CV at public/cv.pdf and set this to '/cv.pdf' to show a
  // download link. Leave '' to hide it.
  cv: '',

  // Shown on the home page and in the footer.
  links: [
    {
      label: 'Google Scholar',
      href: 'https://scholar.google.com/citations?user=ALIOYIsAAAAJ&hl=en',
    },
    { label: 'ORCID', href: 'https://orcid.org/0000-0002-2730-6099' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amir-rahmani-sm/' },
    { label: 'GitHub', href: 'https://github.com/astormic' },
  ],

  experience: [
    {
      years: 'Mar 2025 to now',
      title: 'Postdoctoral Research Associate',
      place: 'University of Cambridge',
      note: '',
    },
    {
      years: 'Oct 2025 to now',
      title: 'College Research Associate',
      place: 'Wolfson College, Cambridge',
      note: '',
    },
    {
      years: 'Mar 2025 to now',
      title: 'Visiting Researcher',
      place: 'British Antarctic Survey, Cambridge',
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
      place: 'Ries Lab, EMBL, Heidelberg, Germany',
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
      years: '2017',
      title: 'Bronze Medal, 21st Iran National Physics Olympiad',
      place: 'Iran',
      note: '',
    },
  ],

  supervision: [
    {
      years: '2025-2026',
      title: 'Transformer-based single-particle tracking analysis',
      place: 'Frederick Lawrence, MPhil DIS, Department of Physics, University of Cambridge',
      note: '',
    },
    {
      years: '2025-2026',
      title: 'Characterisation of membrane bilayer models at cold using solvatochromic dyes',
      place: 'Shonit Sharma and Boyd Lyons, Part IIB, Department of Chemical Engineering and Biotechnology, University of Cambridge',
      note: '',
    },
  ],

  instruments: [
    {
      name: 'High-NA oblique plane microscope',
      text: 'Oblique plane microscopy integrated with microfluidics, for counting individual molecules on flowing cells.',
      place: 'Ponjavic Lab, Leeds',
    },
    {
      name: 'PiFocus',
      text: 'Astigmatism-based focus stabilisation with better than 10 nm axial precision over more than 10 µm.',
      place: 'Ponjavic Lab, Leeds',
    },
    {
      name: 'Double-helix-based 3D SMLM microscope',
      text: 'Single-molecule localisation in 3D, with a longer depth range than astigmatic approaches.',
      place: 'Ponjavic Lab, Leeds',
    },
    {
      name: 'Dual-channel localisation microscope',
      text: 'Two-colour single-molecule localisation, built to study the stoichiometry and spatial organisation of protein complexes.',
      place: 'Ries Lab, EMBL Heidelberg',
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
  { label: 'News', href: '/news/' },
  { label: 'Books', href: '/books/' },
  { label: 'Media', href: '/media/' },
];
