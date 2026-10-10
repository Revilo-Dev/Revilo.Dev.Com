export const wikiSlug = (text) => text.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export function createSectionWiki(markdown, base, groupsByTitle) {
  const chapters = markdown.trim().split(/\n(?=## [^#])/);
  const pages = chapters.slice(1).filter((chapter) => !chapter.startsWith('## Contents')).map((chapter) => {
    const [heading, ...body] = chapter.split('\n');
    const title = heading.replace(/^## /, '').trim();
    return {
      title,
      slug: wikiSlug(title),
      group: groupsByTitle[title],
      summary: body.find((line) => line.trim() && !line.startsWith('#') && !line.startsWith('|') && !line.startsWith('>'))?.trim() || `Explore ${title.toLowerCase()}.`,
      content: body.join('\n').trim().replace(/\n---\s*$/, '').trim(),
    };
  });

  for (const [index, page] of pages.entries()) {
    page.related = [pages[index - 1]?.slug, pages[index + 1]?.slug].filter(Boolean);
  }

  return {
    wikiBase: base,
    wikiPages: pages,
    wikiGroups: [...new Set(pages.map((page) => page.group))],
    wikiPageBySlug: Object.fromEntries(pages.map((page) => [page.slug, page])),
  };
}
