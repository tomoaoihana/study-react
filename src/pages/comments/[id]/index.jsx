import { Header } from "src/components/Header";
import Comment from "src/components/Comment";
import { SWRConfig } from "swr";
import { API_URL } from "src/utils/const";

export const getStaticPaths = async () => {
  //コメントのAPI一覧を取得する
  //idを取得して、それぞれのidに対応するページを作成する
  //idはstring型なので、toString()で文字列に変換する
  const comments = await fetch(`${API_URL}/comments?_limit=10`);
  const commentsData = await comments.json();

  const paths = commentsData.map((comment) => ({
    params: { id: comment.id.toString() },
  }));

  return {
    paths, //同じ名前の時は省略可能
    fallback: "blocking", //true, false, blockingのいずれかを指定
  };
};

//getStaticPropsは一回しか呼ばれない
export const getStaticProps = async (ctx) => {
  const { id } = ctx.params;

  const COMMENT_API_URL = `${API_URL}/comments/${id}`;
  const comment = await fetch(COMMENT_API_URL);

  // console.log(COMMENT_API_URL);

  if (!comment.ok) {
    //データが取得できなかった場合は、notFound（４０４）を返す
    return {
      notFound: true,
      revalidate: 1000,
    };
  }

  const commentData = await comment.json();

  return {
    props: {
      fallback: {
        [COMMENT_API_URL]: commentData,
      },
    },
    revalidate: 1000,
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
