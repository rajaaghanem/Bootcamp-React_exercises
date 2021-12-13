import React from "react";
import "./index.css";

const Card = (props) =>{
    return(
        
       <div className="card">
           <div className="the-image">
            <img alt="img" src={props.image}/>
           </div>
           <div className="content">
                <div className="title">{props.title}</div>
                <div className="description">{props.description}</div>
                <div className="links"><a className="link1" href="http://">one</a> <a className="link2" href="http://">two</a></div>
           </div>

       </div>
      
    );
};

export default Card;