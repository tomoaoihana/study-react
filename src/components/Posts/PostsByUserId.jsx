import Link from "next/link";
import { usePostsByUserId } from "src/hooks/useFetchArray";

export const PostsByUserId = (props) => {
  const { data, error, isLoading, isEmpty } = usePostsByUserId(props.id);

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
    <ul className="space-y-4">
      {data.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`} className="group">
              <h1 className="font-bold text-xl group-hover:text-pink-500">
                {post.title}
              </h1>
              <p className="text-lg text-gray-500 group-hover:text-pink-400">
                {post.body}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
