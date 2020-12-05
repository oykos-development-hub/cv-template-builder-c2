import React from "react";

export default class CVdataInput extends React.Component {
  render() { 
    return (
      <div className="cvd-inputdiv">
        <label className="cvd-h2">{this.props.label}</label>
        <input className="cvd-input" id={this.props.name} name={this.props.name} placeholder={this.props.text} type={this.props.type} value={this.props.value} onChange={this.props.change} onBlur={this.props.blur} onFocus={this.props.focus}/>
        <p  className="error" >  <span className="holder">.</span>
          {this.props.error.length > 0 &&  <span>{this.props.error}</span>}
        </p>
      </div>
    );
  }
}