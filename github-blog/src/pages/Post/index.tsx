import { PostCard } from './components/PostCard';
import { PostContainer } from './styles';

export function Post() {
  return (
    <>
      <PostCard />
      <PostContainer>
        <div>
          <p>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          </p>

          <h4>Dynamic typing</h4>
          <p>
            JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
          </p>
        </div>

        <div>
          <p>
            <span className="let">let</span> foo = <span>42</span>;
          </p>
          <p>
            foo = <span>&apos;42&apos;</span>;
          </p>
          <p>
            let foo = <span>true</span>;
          </p>
        </div>
      </PostContainer>
    </>
  );
};
