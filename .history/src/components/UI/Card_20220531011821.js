import React from "react";
import classes from "./Card.module.css";

//props.children is the content of the Card component
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
