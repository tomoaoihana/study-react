import { Header } from "src/components/Header";
import styles from "src/app/page.module.css";
import { User } from "src/components/User";

const UsersId = () => {
  return (
    <div>
      <Header />
      <div className={styles.inner}>
        <User />
      </div>
    </div>
  );
};

export default UsersId;
