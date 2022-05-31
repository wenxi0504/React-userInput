import React from "react";

const AddUser = (props) => {
  return (
    <form>
      <label>Username</label>
      <input
        id="username"
        type="text"
        name="username"
        onChange={props.handleChange}
      />
      <h1>Add User</h1>
    </form>
  );
};

export default AddUser;
