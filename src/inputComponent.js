import React from "react";

export default class InputComponent extends React.Component {
    constructor(props) {
      super(props);
        if (this.props.type === "submit") {
            this.state = {value: 'Sign up'}
        }
        else {
            this.state = {value: ''}
        };
     
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
        
      return (
        <input id={this.props.name} name={this.props.name} placeholder={this.props.text} type={this.props.type} value={this.state.value} onChange={this.handleChange} />
      );
    }
  }