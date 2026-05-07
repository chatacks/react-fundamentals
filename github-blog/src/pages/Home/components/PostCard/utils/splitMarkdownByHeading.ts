import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkStringify from 'remark-stringify';
import type { MarkdownSection } from '../../../../../@types/markdown.type';
import type { Heading, Root, RootContent } from 'mdast';

export const splitMarkdownByHeading = (
  markdown: string
): MarkdownSection[] => {
  const tree = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .parse(markdown) as Root;

  const sections: MarkdownSection[] = [];

  let currentSection: MarkdownSection | null = null;

  for (const node of tree.children) {
    if (node.type === 'heading' && node.depth === 1) {
      if (currentSection) {
        sections.push(currentSection);
      }

      currentSection = {
        title: extractText(node),
        nodes: [node]
      };
    } else {
      if (!currentSection) {
        currentSection = {
          title: '',
          nodes: []
        };
      }

      currentSection.nodes.push(node);
    }
  }

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
};

export const extractText = (
  node: Heading
): string => {
  return node.children
    .map((child) => {
      if (child.type === 'text') {
        return child.value;
      }

      return '';
    })
    .join('');
};

export const nodesToMarkdown = (
  nodes: RootContent[]
): string => {
  return unified()
    .use(remarkStringify)
    .stringify({
      type: 'root',
      children: nodes
    } as Root);
};
