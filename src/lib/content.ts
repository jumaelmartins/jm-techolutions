import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DATA_PATH = join(process.cwd(), 'src/data/content.json');

export type ContentData = {
  hero: Record<string, string>;
  stats: Array<{ id: number; value: number; suffix: string; label: string }>;
  services: Array<Record<string, unknown>>;
  projects: Array<Record<string, unknown>>;
  testimonials: Array<Record<string, unknown>>;
  contact: Record<string, string>;
};

export function getContent(): ContentData {
  const raw = readFileSync(DATA_PATH, 'utf-8');
  return JSON.parse(raw) as ContentData;
}

export function getSection<K extends keyof ContentData>(section: K): ContentData[K] {
  return getContent()[section];
}

export function updateSection<K extends keyof ContentData>(
  section: K,
  data: ContentData[K]
): void {
  const content = getContent();
  content[section] = data;
  writeFileSync(DATA_PATH, JSON.stringify(content, null, 2), 'utf-8');
}
