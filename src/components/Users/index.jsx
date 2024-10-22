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
    <ul className="grid grid-cols-2 gap-6">
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link
              href={`/users/${user.id}`}
              className="block  p-4 shadow rounded hover:bg-gray-100"
            >
              <h1 className="font-bold text-xl">{user.name}</h1>
              <div className="text-lg truncate">{user.email}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
