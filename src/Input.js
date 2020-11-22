import React from 'react';
import './Input.css';
export default class Input extends React.Component{
    render(){
        return(<div>
            <input className = "input" type = "text" placeholder = "Full name"/>
            <input className = "input" type = "email" placeholder = "Email"/>
            <input className = "input"  type = "password" placeholder = "Password"/>
            <input className = "input"  type = "password" placeholder = "Repeat password"/>
        </div>);
    }
}