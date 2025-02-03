// src/utils/slugify.ts
export function slugify(text: string): string {
  return text
    .toString() // Convert to string (in case of numbers or other types)
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing whitespace
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters (e.g., special symbols)
    .replace(/\-\-+/g, '-'); // Replace multiple hyphens with a single hyphen
}
