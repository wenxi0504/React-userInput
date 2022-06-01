import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  // enteredUser is the latest snapshot of the state
  const [enteredUsername, setEnterUsername] = useState("");
  const [enteredAge, setEnterAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  const usernameChangeHandler = (event) => {
    setEnterUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterUsername(event.target.value);
  };

  // addUserHandler()means call immediately
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          name="username"
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
