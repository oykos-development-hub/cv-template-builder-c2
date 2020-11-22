import { render } from '@testing-library/react';
import React from 'react';
import './Button.css';
export default class Button extends React.Component{
    render(){
        return(<div>
            <button className = "button">Sign up</button>
        </div>);
    }
}