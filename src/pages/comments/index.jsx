import { Header } from "src/components/Header";
import { Comments as CommentsComponent } from "src/components/Comments";

const Comments = () => {
  return (
    <div>
      <Header />
      <h1>Comments</h1>
      <CommentsComponent />
    </div>
  );
};

export default Comments;
