import { Header } from "src/components/Header";
import Comment from "src/components/Comment";
import { SWRConfig } from "swr";

export const getStaticPaths = async () => {
  const comments = await fetch("https://jsonplaceholder.typicode.com/comments");
  const commentsData = await comments.json();
  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));

  return {
    paths, //同じ名前の時は省略可能
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;

  const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comments/${id}`;

  console.log(`comments/${id}のSGの処理が実行されました`);

  const comment = await fetch(COMMENT_API_URL);
  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
  };
};

const CommentId = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Header />
      <SWRConfig value={{ fallback }}>
        <Comment />
      </SWRConfig>
    </div>
  );
};

export default CommentId;
