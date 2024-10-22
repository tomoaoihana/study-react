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
      <Link className="text-lg hover:text-pink-200" href={`/posts/${data.id}`}>
        {data.title}
      </Link>
    </div>
  );
};
