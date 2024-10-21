import { Header } from "src/components/Header";
import { Users as UsersComponent } from "src/components/Users";

const Users = () => {
  return (
    <div>
      <Header />
      <div>
        <UsersComponent />
      </div>
    </div>
  );
};

export default Users;
