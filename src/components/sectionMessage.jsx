import React from "react";
import "./sectionMessage.css"
import image from "./Button.jpg"

class FirstSection extends React.Component{
    render(){
        return(
            <div className="first-section">
                <p className="paragraph-one">
                    <h1>
                    John Wick 3 : Parabellum
                    </h1>
                </p>
                <p className="paragraph-two">
                John Wick is on the run after killing a member of the international assassins' 
                guild, and with a $14 million price tag on his head, he is the target of 
                hit men and women everywhere.
                </p>
                <img src={image} alt="" />
            </div>
        )
    }
}

export default FirstSection;