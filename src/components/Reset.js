import React from 'react'
export default class Reset extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <input 
            id = {this.props.id}
            type = {this.props.type}
            />
        )
    }
}