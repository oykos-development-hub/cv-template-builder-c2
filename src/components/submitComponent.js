import React from "react";

export default class SubmitComponent extends React.Component {
  render() { 
    return (
      <input id={this.props.name} name={this.props.name} placeholder={this.props.text} type={this.props.type} value={this.props.value} />
    );
  }
}

