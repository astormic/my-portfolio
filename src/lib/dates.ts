const monthYear = new Intl.DateTimeFormat('en-GB', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

const dayMonthYear = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

export const formatMonth = (d: Date) => monthYear.format(d);
export const formatDay = (d: Date) => dayMonthYear.format(d);
export const isoDay = (d: Date) => d.toISOString().slice(0, 10);
