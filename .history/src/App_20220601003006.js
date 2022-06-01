import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
function App() {
  const [UsersList, setUsersList] = useState();
  const addUserHandler = (uName, uAge) => {
    setUsersList((preUsersList) => {
      return [...preUsersList, { name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={UsersList} />
    </div>
  );
}

export default App;
