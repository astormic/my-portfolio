// Prefixes internal paths with the site's base path, so links keep working
// when the site is served from username.github.io/repo-name/.
export function href(path: string): string {
  if (!path.startsWith('/')) return path; // external URL, mailto:, etc.
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + path;
}

export function isExternal(path: string): boolean {
  return /^https?:\/\//.test(path);
}
