import Link from "next/link";
import { useComments } from "src/hooks/useFetchArray";

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
    <ul className="space-y-2 mt-4">
      {data.map((comment) => {
        return (
          <li key={comment.id} className="border-b pb-2">
            <Link
              href={`comments/${comment.id}`}
              className=" block  hover:text-pink-200"
            >
              <h2>{comment.body}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
