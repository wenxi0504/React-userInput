import React from "react";

//props.children is the content of the Card component
const Card = (props) => {
  return <div className="card">{props.children}</div>;
};

export default Card;
