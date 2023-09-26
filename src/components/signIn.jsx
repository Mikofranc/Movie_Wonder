import React from "react";
import "./signIn.css"
class SignIn extends React.Component{
    render(){
        return (
        <form action="" className="sign_up">
            <input type="text" placeholder="enter first name" id="first_name"/>
            <input type="text" placeholder="enter last name" id="last_name"/>
            <input type="email" placeholder="enter email" id="email"/>
            <input type="password" placeholder="enter password" id="password"/>
            <input type="password" placeholder="verify password" id="verify_password"/>
            <button type="submit">Submit</button>
        </form>
        )
    }
}
export default SignIn;