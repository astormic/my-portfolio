// Everything personal lives in this file. Edit it first.

export const site = {
  name: 'Amir Rahmani',
  // Shown with the logo at the top of every page.
  brand: 'Zarrenama',
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
    'I am a physicist interested in single-molecule imaging and quantum biology. I am currently a Postdoctoral Research Associate in the Laser Analytics Group at the University of Cambridge and a College Research Associate at Wolfson College.',
    'My current work focuses on understanding the membranes of living cells at near-freezing temperatures, using single-particle tracking or single-molecule localisation microscopy techniques (such as DNA-PAINT) to visualise membrane-related processes in live cells. Previously, I worked on single-molecule flow cytometry of T cells and on nanometre-precision focus stabilisation for super-resolution microscopy, and I remain interested in single-molecule imaging of T cell membranes.',
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
      years: 'Mar 2025 - Present',
      title: 'Postdoctoral Research Associate',
      place: 'University of Cambridge, Cambridge, UK',
      note: 'Supervisor: Prof. Clemens Kaminski',
    },
    {
      years: 'Oct 2025 - Present',
      title: 'College Research Associate',
      place: 'Wolfson College, University of Cambridge, Cambridge, UK',
      note: '',
    },
    {
      years: 'Mar 2025 - Present',
      title: 'Visiting Researcher',
      place: 'British Antarctic Survey, Cambridge, UK',
      note: 'Supervisor: Prof. Melody Clark',
    },
    {
      years: 'Dec 2019 - May 2020',
      title: 'Visiting Researcher',
      place: 'ICFO, Barcelona, Spain',
      note: 'Supervisor: Dr. Stefan Wieser',
    },
    {
      years: 'Jul 2018 - Jul 2019',
      title: 'Student',
      place: 'Ries Lab, EMBL, Heidelberg, Germany',
      note: 'Supervisor: Prof. Jonas Ries',
    },
  ],

  education: [
    {
      years: 'Oct 2022 - Nov 2025',
      title: 'PhD, Physics',
      place: 'University of Leeds, Leeds, UK',
      note: 'Supervisor: Dr. Aleks Ponjavic',
    },
    {
      years: 'Sep 2021 - Sep 2022',
      title: 'MSc, Physics',
      place: "King's College London, London, UK",
      note: '',
    },
  ],

  teaching: [
    {
      years: '2025 - 2026',
      title: 'Teaching Assistant, Computational Skills: Python',
      place: 'University of Cambridge, Cambridge, UK',
      note: '',
    },
    {
      years: '2022 - 2024',
      title: 'Teaching Assistant, Computational Skills: Python',
      place: 'University of Leeds, Leeds, UK',
      note: '',
    },
    {
      years: '2022 - 2024',
      title: 'Teaching Assistant, Introduction to Experimental Physics',
      place: 'University of Leeds, Leeds, UK',
      note: '',
    },
  ],

  // Shown on the home page under "Service and leadership", newest first.
  service: [
    {
      years: '2026 - Present',
      title: 'Ambassador',
      place: 'Physics of Life Network (PoLNET), UK',
      note: '',
    },
    {
      years: '2028',
      title: 'Co-chair',
      place: 'Gordon Research Seminar on Image Science',
      note: '',
    },
    {
      years: '2025 - Present',
      title: 'Department Officer',
      place: 'Postdocs of Cambridge Society, University of Cambridge, Cambridge, UK',
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
      place: 'ICFO, Barcelona, Spain',
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
      years: '2025 - 2026',
      title: 'Transformer-based single-particle tracking analysis',
      place: 'Frederick Lawrence',
      note: 'MPhil in Data Intensive Science (DIS), Department of Physics, University of Cambridge',
    },
    {
      years: '2025 - 2026',
      title: 'Characterisation of membrane bilayer models at cold using solvatochromic dyes',
      place: 'Shonit Sharma and Boyd Lyons',
      note: 'Part IIB, Department of Chemical Engineering and Biotechnology, University of Cambridge',
    },
  ],

  instruments: [
    {
      name: 'High-NA oblique plane microscope',
      text: 'Oblique plane microscopy integrated with microfluidics, for counting individual molecules on flowing cells.',
      place: 'Ponjavic Lab, University of Leeds, Leeds, UK',
    },
    {
      name: 'PiFocus',
      text: 'Astigmatism-based focus stabilisation with better than 10 nm axial precision over more than 10 µm.',
      place: 'Ponjavic Lab, University of Leeds, Leeds, UK',
    },
    {
      name: 'Double-helix-based 3D SMLM microscope',
      text: 'Single-molecule localisation in 3D, with a longer depth range than astigmatic approaches.',
      place: 'Ponjavic Lab, University of Leeds, Leeds, UK',
    },
    {
      name: 'Dual-channel localisation microscope',
      text: 'Two-colour single-molecule localisation, built to study the stoichiometry and spatial organisation of protein complexes.',
      place: 'Ries Lab, EMBL, Heidelberg, Germany',
    },
  ],

  // Shown on the home page under "Expertise".
  skills: [
    'Single-molecule localisation microscopy (SMLM)',
    'DNA-PAINT',
    'sptPALM',
    'Single-particle tracking (SPT)',
    'Live-cell super-resolution imaging',
    'Optical microscopy and microscope development',
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
  { label: 'Publications', href: '/publications/' },
  { label: 'News', href: '/news/' },
  { label: 'Books', href: '/books/' },
  { label: 'Media', href: '/media/' },
];
