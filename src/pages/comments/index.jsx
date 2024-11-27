import { Header } from "src/components/Header";
import { Comments as CommentsComponent } from "src/components/Comments";
import { SWRConfig } from "swr";
import { API_URL } from "src/utils/const";

export const getStaticProps = async () => {
  const COMMENTS_API_URL = `${API_URL}/comments`;
  console.log("SGの処理が実行されました");
  const comments = await fetch(COMMENTS_API_URL);
  const commentsData = await comments.json();

  return {
    props: {
      fallback: {
        [COMMENTS_API_URL]: commentsData,
      },
    },
    revalidate: 10,
  };
};

const Comments = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Header />
      <h1 className="font-bold text-2xl">Comments</h1>
      <SWRConfig value={{ fallback }}>
        <CommentsComponent />
      </SWRConfig>
    </div>
  );
};

export default Comments;
