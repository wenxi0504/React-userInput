import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  // current value holds the value of the input that ref is connected with
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // enteredUser is the latest snapshot of the state
  // const [enteredUsername, setEnterUsername] = useState("");
  // const [enteredAge, setEnterAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid username and age",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age",
      });
      return;
    }
    // lifting the state up to the parent component
    props.onAddUser(enteredName, enteredUserAge);

    //console.log(enteredUsername, enteredAge);
    // setEnterUsername("");
    // setEnterAge("");
  };

  // const usernameChangeHandler = (event) => {
  //   setEnterUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnterAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  // addUserHandler()means call immediately value是双向绑定使value为最新的值
  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            name="age"
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
