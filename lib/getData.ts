'use server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function getMarkdownData(folder: string) {
  const folderPath = path.join(process.cwd(), folder);

  try {
    const files = await fs.promises.readdir(folderPath);
    const markdownData: Record<
      string,
      { data: Record<string, unknown>; content: string }
    > = {};

    for (const file of files) {
      if (path.extname(file) === '.md') {
        const filePath = path.join(folderPath, file);
        const fileContents = await fs.promises.readFile(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        const slug = path.basename(file, '.md');
        markdownData[slug] = { data, content };
      }
    }

    return markdownData;
  } catch (error) {
    console.error(`Error reading markdown files from ${folderPath}:`, error);
    throw error;
  }
}

export async function getData(pageSlug: string | undefined = undefined) {
  const markdownData = await getMarkdownData('./content');

  if (!pageSlug) {
    return markdownData;
  } else {
    return markdownData[pageSlug].data;
  }
}
