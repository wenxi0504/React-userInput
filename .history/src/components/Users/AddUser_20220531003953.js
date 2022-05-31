import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        name="username"
        onChange={props.handleChange}
      />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" name="age" onChange={props.handleChange} />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
