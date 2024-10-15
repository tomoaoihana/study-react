import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { user, userError, isLoading } = useUser();

  console.log({ user, userError });

  if (isLoading) {
    return <p>ローディング中です・・・・</p>;
  }

  if (userError) {
    return <p>{userError.message}</p>;
  }

  return (
    <div>
      <h1>{user?.name}</h1>
      <ul>
        <li>{user?.email}</li>
        <li>{user?.phone}</li>
        <li>{user?.website}</li>
      </ul>
    </div>
  );
};
