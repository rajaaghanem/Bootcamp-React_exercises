import React from "react";


const Card = (props) => {

  const arrayOfObj = props.objs.map((obj) => {
    return (
      <div style={{fontSize:"25px"}}>{`this name is: ${obj.name} birthday: ${obj.birthday} favorite meat: ${obj.favoriteFoods.meats}
                   favorite fish:${obj.favoriteFoods.fish}`}</div>
    );
  });

  return <div>{arrayOfObj}</div>;
};

export default Card;
