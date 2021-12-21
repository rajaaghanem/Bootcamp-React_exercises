import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";


const Header=()=>{
    return(
        <div className="header-container">
            <Link className="link" to="/">Homepage</Link>
            <Link className="link" to="/products">Products</Link>
        </div>
    );
}
export default Header;