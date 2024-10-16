import Link from "next/link";
import { useUsers } from "src/hooks/useFetchArray";

export const Users = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  // console.log({ data, error });

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
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <p>
                {user.name}({user.email})
              </p>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
