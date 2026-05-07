import { formatDistanceToNow } from 'date-fns';
import { PostCardContainer, PostCardContent, PostCardHeader } from './styles';
import { splitMarkdownByHeading } from './utils/splitMarkdownByHeading';
import { ptBR } from 'date-fns/locale';

interface PostCardProps {
  body: string;
  date: string;
}

export function PostCard({ body, date }: PostCardProps) {
  const sections = splitMarkdownByHeading(body);
  console.log(sections);

  const formattedDateWithSufix = formatDistanceToNow(date, {
    addSuffix: true,
    locale: ptBR
  });

  return (
    <>
      {sections.map(section => {
        const node = section.nodes[2];

        const value =
          node.type === 'paragraph' &&
          node.children[0]?.type === 'text'
            ? node.children[0].value
            : '';

        return (
          <PostCardContainer key={section.title}>
            <PostCardHeader>
              <h3>
                {section.title}
              </h3>

              <span>
                {formattedDateWithSufix}
              </span>
            </PostCardHeader>

            <PostCardContent>
              <p>
                {value}
              </p>
            </PostCardContent>
          </PostCardContainer>
        );
      })}
    </>

  );
};
