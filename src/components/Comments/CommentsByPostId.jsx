import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

  console.log(data);

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
    <ol>
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`posts/${post.id}`}>
              <h2>{post.body}</h2>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
