import React from 'react';

export default class SaveButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "button2">
                <input type = {this.props.type} value = {this.props.value} className = {this.props.classes}/>
            </div>
        )
    }
}