import { PostsByUserId } from "src/components/Posts/PostsByUserId";
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
      <h1 className="font-bold text-3xl ">{user?.name}</h1>
      <h2 className="text-xl font-bold mt-10">詳細</h2>
      <ul className="list-inside list-disc mt-2 text-lg">
        <li>{user?.email}</li>
        <li>{user?.phone}</li>
        <li>{user?.website}</li>
      </ul>
      <h2 className="text-xl font-bold mt-10">投稿</h2>
      <div className="mt-4">
        <PostsByUserId id={user?.id} />
      </div>
    </div>
  );
};
