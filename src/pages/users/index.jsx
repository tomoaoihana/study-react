import { Header } from "src/components/Header";
import { Users as UsersComponent } from "src/components/Users";
import styles from "src/app/page.module.css";

const Users = () => {
  return (
    <div>
      <Header />
      <div className={styles.inner}>
        <UsersComponent />
      </div>
    </div>
  );
};

export default Users;
