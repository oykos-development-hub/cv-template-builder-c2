import React from 'react';
export default class Input extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="inputdiv">
              <input 
                name={this.props.name}
                placeholder={this.props.text} 
                type={this.props.type}
              />
            </div>
          );
    }
}