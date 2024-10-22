import { PostsByCommentId } from "src/components/Posts/PostsByCommentId";
import { useComment } from "src/hooks/useComment";

const Comment = () => {
  const { data, error, isLoading, isEmpty } = useComment();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (isEmpty) return <div>No data</div>;

  console.log(data);

  return (
    <div>
      <div className="text-lg">
        {data?.name}({data?.email})
      </div>
      <h1 className="text-3xl font-bold">{data?.body}</h1>
      <h2 className="text-xl font-bold mt-10">元の記事</h2>
      <div className="mt-4">
        <PostsByCommentId id={data?.postId} />
      </div>
    </div>
  );
};

export default Comment;
