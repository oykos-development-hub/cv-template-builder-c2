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
                type={this.props.type}>
                {this.props.content} 
            </button>
        )
    }
}