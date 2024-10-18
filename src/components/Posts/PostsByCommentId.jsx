import Link from "next/link";
import { usePost } from "src/hooks/usePost";

export const PostsByCommentId = (props) => {
  const { data, error, isLoading, isEmpty } = usePost(props.id);

  if (isLoading) {
    return <p>ローディング中です・・・・</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmpty) {
    return <p>データがありません</p>;
  }

  return (
    <div>
      <Link href={`/posts/${data.id}`}>元記事：{data.title}</Link>
    </div>
  );
};
