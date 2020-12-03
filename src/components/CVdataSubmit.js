import React from "react";

export default class CVdataSubmit extends React.Component {
  render() { 
    return (
      <input className="cvd-submit" id={this.props.name} name={this.props.name} placeholder={this.props.text} type={this.props.type} value={this.props.value} />
    );
  }
}

