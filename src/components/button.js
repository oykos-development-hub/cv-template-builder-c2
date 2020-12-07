import React from 'react';

export default class Button extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <button 
                className = "button"
                id={this.props.id}
                type={this.props.type}
                onClick={this.props.onClick}>
                {this.props.content} 
            </button>
        )
    }
}