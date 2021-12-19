import React from "react";

const Avatar = (props) => {
  return (
    <div key={props.keyEl} style={{ fontSize: "20px" }} className="card-design">
      <img src={`${props.srcImg}`} alt="" />
      <p>{`Name: ${props.namefirst} ${props.nameLast}`}</p>
      <p>{`Email: ${props.email} `}</p>
      <p>{`Phone: ${props.phone} `}</p>
    </div>
  );
};

export default Avatar;
