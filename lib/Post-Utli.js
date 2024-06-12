import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function getPostMetadata(basePath) {
  const folderPath = path.join(process.cwd(), basePath);
  const files = fs.readdirSync(folderPath);

  const posts = files.map((filename) => {
    const filePath = path.join(folderPath, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      prep_time: matterResult.data.prep_time,
      cook_time: matterResult.data.cook_time,
      bio: matterResult.data.description,
      slug: filename.replace('.md', ''),
    };
  });

  return posts;
}
