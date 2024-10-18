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
      <h2>{data?.body}</h2>
      <ul>
        <li>{data?.name}</li>
        <li>{data?.email}</li>
      </ul>

      <PostsByCommentId id={data?.postId} />
    </div>
  );
};

export default Comment;
