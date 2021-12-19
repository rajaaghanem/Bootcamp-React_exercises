import React from "react";

const Name = (props) => {
  const arrayNames = props.names.map((name) => {
    return <div>{`this name is: ${name}`}</div>;
  });

  return <div style={{ fontSize: "25px", color: "blue" }}>{arrayNames}</div>;
};

export default Name;
