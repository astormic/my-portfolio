import { XMLParser } from 'fast-xml-parser';

// Letterboxd publishes a public RSS feed for every member at
// https://letterboxd.com/<username>/rss/
// It is read when the site is built, so the page ships as plain HTML with no
// client-side JavaScript. The GitHub workflow rebuilds daily to keep it fresh.

export interface Film {
  title: string;
  year: string;
  rating: number | null; // 0.5 to 5, or null if logged without a rating
  rewatch: boolean;
  watched: Date | null;
  link: string;
  poster: string | null;
}

export interface FilmResult {
  films: Film[];
  error: string | null;
}

const parser = new XMLParser({
  ignoreAttributes: true,
  parseTagValue: false, // keep "1917" a title, not a number
  trimValues: true,
});

export function parseFeed(xml: string): Film[] {
  const doc = parser.parse(xml);
  const raw = doc?.rss?.channel?.item ?? [];
  const items: Record<string, unknown>[] = Array.isArray(raw) ? raw : [raw];

  return items
    // The feed also contains lists; only diary entries have a film title.
    .filter((item) => item['letterboxd:filmTitle'])
    .map((item) => {
      const ratingText = item['letterboxd:memberRating'];
      const rating = ratingText ? Number(ratingText) : null;
      const watchedText = item['letterboxd:watchedDate'] ?? item['pubDate'];
      const watched = watchedText ? new Date(String(watchedText)) : null;
      const poster = String(item['description'] ?? '').match(
        /<img[^>]+src="([^"]+)"/,
      );

      return {
        title: String(item['letterboxd:filmTitle']),
        year: String(item['letterboxd:filmYear'] ?? ''),
        rating: rating !== null && Number.isFinite(rating) ? rating : null,
        rewatch: item['letterboxd:rewatch'] === 'Yes',
        watched: watched && !Number.isNaN(watched.getTime()) ? watched : null,
        link: String(item['link'] ?? ''),
        poster: poster ? poster[1] : null,
      };
    });
}

export async function getLatestFilms(
  username: string,
  limit = 12,
): Promise<FilmResult> {
  const url = `https://letterboxd.com/${encodeURIComponent(username)}/rss/`;

  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'personal-site-build (Astro)' },
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      throw new Error(`Letterboxd answered ${response.status}`);
    }

    const all = parseFeed(await response.text());
    // Prefer rated films; fall back to everything if nothing is rated.
    const rated = all.filter((film) => film.rating !== null);
    return { films: (rated.length ? rated : all).slice(0, limit), error: null };
  } catch (err) {
    // Never fail the whole build because Letterboxd is unreachable.
    const message = err instanceof Error ? err.message : String(err);
    console.warn(`[letterboxd] Could not load ${url}: ${message}`);
    return { films: [], error: message };
  }
}
