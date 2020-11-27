import React from 'react';
import './button.css';

export default class Button extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button 
            className = "button"
            type="submit">
            Login 
            </button>
        )
    }
}