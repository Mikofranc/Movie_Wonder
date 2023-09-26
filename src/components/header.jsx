import React from "react";
import './header.css'
import search from "./logo.svg"
import logoImage from "./tv.png"

class Header extends React.Component{
    render(){ 
        return(
            <div className="header">
                <div className="logo">
                    <div>
                        <img src={logoImage} alt="" />
                    </div>
                    <div><h3>Movie-wonder</h3></div>
                </div>
                <div className="search_area">
                <input type="text" id="search_bar"/>
                <span><img src={search} alt="" /></span>
                </div>
                
                <a href="www.google.com"><h3>Login</h3></a>
            </div>
        )
    }
}
export default Header;