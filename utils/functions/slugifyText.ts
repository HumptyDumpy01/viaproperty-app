import slugify from 'slugify';

export function slugifyText(text: string, lower: boolean = true): string {
  return slugify(text, { lower: lower });
}