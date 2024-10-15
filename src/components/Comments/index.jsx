import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const Comments = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`comments/${comment.id}`}>
              <h2>{comment.name}</h2>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
