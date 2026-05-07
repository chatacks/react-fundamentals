import type {
  RootContent,
} from 'mdast';

export interface MarkdownSection {
  title: string;
  nodes: RootContent[];
}
