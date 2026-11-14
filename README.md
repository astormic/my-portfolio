# Personal site

A small, fast personal site built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com). Every page is plain HTML generated at
build time; no JavaScript is shipped apart from Astro's tiny link prefetcher
and the Spotify player.

Pages: **Home** (bio, education, CV, links), **Research** (projects and
publications with abstracts and PDFs), **News** (cards for conferences, public engagement and notes), **Books** (cover grid with
star ratings) and **Media** (Spotify playlist and latest Letterboxd ratings).

## Run it locally

You need [Node.js](https://nodejs.org) 24 (the current LTS) or newer.

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # writes the finished site to dist/
npm run preview    # serves dist/ to check the build
```

## Make it yours

| To change | Edit |
| --- | --- |
| Name, bio, links, education, experience, skills | `src/site.config.ts` |
| Spotify playlist and Letterboxd username | `media` in `src/site.config.ts` |
| Your CV | replace `public/cv.pdf` |
| Projects and publications | one `.md` file each in `src/content/research/` |
| Paper PDFs | drop them in `public/papers/` |
| News cards | one `.md` file each in `src/content/news/` |
| Books | one `.yaml` file each in `src/content/books/`, cover in `covers/` |
| Colours and font | the `@theme` block in `src/styles/global.css` |
| Page background images and home page tiles | files in `src/assets/`, set in each page in `src/pages/` |
| A photo on a news card or project | put the image next to its `.md` file and add `image: ./name.jpg` |

Everything in the repository now is example content. Delete the example files
once you have added your own.

### A publication

`src/content/research/my-paper.md`

```md
---
title: 'Title of the paper'
date: 2026-04-30
kind: publication        # or: project
authors: You, A. Colleague
venue: Journal Name, 1(2), 3–4
pdf: /papers/my-paper.pdf   # a file in public/, or a full URL
link: https://doi.org/...
---

The abstract goes here, as Markdown.
```

Only `title`, `date` and `kind` are required.

### A book

`src/content/books/my-book.yaml`

```yaml
title: Book Title
author: Author Name
rating: 4.5              # optional: 0 to 5, half stars allowed
cover: ./covers/my-book.jpg  # optional: a photo or cover image
read: 2026-10-01         # optional, used for ordering
reading: true            # optional: shows it under "Currently reading"
link: https://...        # optional
```

Covers can be JPG, PNG, WebP or SVG. Portrait images around 600 × 900 px work
best; Astro resizes and compresses them at build time.

### Films

Set `letterboxdUsername` in `src/site.config.ts`. The build reads your public
feed at `https://letterboxd.com/<username>/rss/` and shows your latest rated
films. Because the feed is read at build time, the site is rebuilt once a day
by the GitHub workflow to stay current. If Letterboxd cannot be reached, the
build still succeeds and the page links to your profile instead.

### Spotify

Open the playlist in Spotify, choose Share, then Copy link. The ID is the part
after `/playlist/` and before `?`. Put it in `spotifyPlaylistId`. The playlist
must be public.

## Put it on GitHub Pages

1. Create a repository on GitHub and push this folder to the `main` branch:

   ```sh
   git init -b main
   git add .
   git commit -m "Initial site"
   git remote add origin https://github.com/<username>/<repository>.git
   git push -u origin main
   ```

2. On GitHub, open **Settings → Pages** and set **Source** to
   **GitHub Actions**.

The workflow in `.github/workflows/deploy.yml` then builds and publishes the
site on every push, once a day, and whenever you run it from the Actions tab.
It works unchanged for both `username.github.io` and
`username.github.io/repository`.

GitHub pauses scheduled workflows after 60 days without a commit. If the daily
rebuild stops, push any change or re-enable it from the Actions tab.

## File structure

```
.
├── .github/workflows/deploy.yml   Build and deploy to GitHub Pages
├── astro.config.mjs               Astro and Tailwind setup
├── package.json
├── package-lock.json
├── tsconfig.json
├── public/                        Copied to the site as-is
│   ├── cv.pdf
│   ├── favicon.ico, favicon-32.png, apple-touch-icon.png
│   └── papers/
│       └── example-paper.pdf
└── src/
    ├── site.config.ts             Your details: edit this first
    ├── content.config.ts          Fields each content file may have
    ├── components/
    │   ├── Entry.astro            A dated row (CV, research)
    │   ├── Footer.astro
    │   ├── Header.astro
    │   └── Stars.astro            Star rating, supports halves
    ├── content/
    │   ├── books/                 One .yaml per book
    │   │   └── covers/            Cover images
    │   ├── news/                  One .md per card
    │   └── research/              One .md per project or publication
    ├── layouts/
    │   └── Base.astro             HTML shell shared by every page
    ├── lib/
    │   ├── dates.ts
    │   ├── letterboxd.ts          Reads and parses the Letterboxd feed
    │   └── url.ts                 Keeps links working under a sub-path
    ├── pages/
    │   ├── index.astro            Home
    │   ├── research.astro
    │   ├── news.astro   
    │   ├── books.astro
    │   ├── media.astro
    │   └── 404.astro
    └── styles/
        └── global.css             Tailwind import, colours, base type
```
