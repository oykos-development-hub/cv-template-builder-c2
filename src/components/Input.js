import React from 'react';
export default class Input extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div >
              <input 
                className = "input2" 
                name={this.props.name}
                type={this.props.type}
                value = {this.props.value}
                onChange = {this.props.change}
              />
            </div>
          );
    }
}