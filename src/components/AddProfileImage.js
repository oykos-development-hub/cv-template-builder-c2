import React from 'react';
export default class AddProfileImage extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <input 
            id = {this.props.id}
            type = {this.props.type}
            className = {this.props.classses}
            onChange = {this.props.onChange}
            />
        );
    }
}