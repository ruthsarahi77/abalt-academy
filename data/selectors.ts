import { news } from "./news";
import { courses } from "./courses";
import { products } from "./products";
import type { NewsItem } from "./content-types";

/** Dates must be valid YYYY-MM-DD values; fail clearly instead of silently misordering. */
function timestamp(date: string): number {
  const value = Date.parse(`${date}T00:00:00Z`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(value) ||
      new Date(value).toISOString().slice(0, 10) !== date) {
    throw new RangeError(`Invalid content date: ${date}. Expected YYYY-MM-DD.`);
  }
  return value;
}

/** Returns a new array. Equal dates retain source order. */
function latest<T extends { date: string }>(items: readonly T[], limit: number): T[] {
  if (!Number.isInteger(limit) || limit < 0) {
    throw new RangeError("Content limit must be a non-negative integer.");
  }
  return items
    .map((item) => ({ item, time: timestamp(item.date) }))
    .sort((a, b) => b.time - a.time)
    .slice(0, limit)
    .map(({ item }) => item);
}

export function getLatestNews(limit = 3) {
  return latest(news, limit);
}

export function getLatestCourses(limit = 3) {
  return latest(courses, limit);
}

export function getLatestProducts(limit = 3) {
  return latest(products, limit);
}

/** Ready for the future Hero integration; undefined when the news source is empty. */
export function getLatestNewsItem(): NewsItem | undefined {
  return getLatestNews(1)[0];
}
