import { Header } from "src/components/Header";
import styles from "src/app/page.module.css";
import Comment from "src/components/Comment";

const CommentId = () => {
  return (
    <div>
      <Header />
      <div className={styles.inner}></div>
      <Comment />
    </div>
  );
};

export default CommentId;
