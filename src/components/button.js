import React from 'react';

export default class Button extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button 
            className = "button"
            type="submit">
            {this.props.content} 
            </button>
        )
    }
}