import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [user, setUser] = useState();

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
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
