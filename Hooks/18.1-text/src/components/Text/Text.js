import React, { useState } from "react";
import "./Text.css";

const Text = (props) => {
  const [text, setText] = useState(props.text.slice(0, props.maxLength));
  const [restOfText, setRestOfText] = useState(
    props.text.slice(props.maxLength)
  );
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  console.log(active);
  return (
    <div>
      <p>
        {text}
        <span
          className={`blue-text ${active ? "unactive" : "active"}`}
          onClick={handleClick}
        >
          ...read more
        </span>
        <span className={` ${active ? "active" : "unactive"}`}>
          {restOfText}
        </span>
        <span
          className={`blue-text ${active ? "active" : "unactive"}`}
          onClick={handleClick}
        >
          read less
        </span>
      </p>
    </div>
  );
};

export default Text;
