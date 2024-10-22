import { Header } from "src/components/Header";
import { Comments as CommentsComponent } from "src/components/Comments";

const Comments = () => {
  return (
    <div>
      <Header />
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsComponent />
    </div>
  );
};

export default Comments;
