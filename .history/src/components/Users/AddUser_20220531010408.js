import React from "react";
import Card from "../../components/UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  // addUserHandler()means call immediately
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          onChange={props.handleChange}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          name="age"
          onChange={props.handleChange}
        />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
