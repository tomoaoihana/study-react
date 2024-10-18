import Link from "next/link";
import { usePostsByCommentId } from "src/hooks/useFetchArray";

export const PostsByCommentId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByCommentId(props.id);

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
              <h2>元記事：{post.title}</h2>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
