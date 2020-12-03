import React from "react";
import DatePicker from 'react-date-picker';
 
import "../style/DatePicker.css";

export default class DatePickerComponent extends React.Component {

  render() { 
    return (
      <div className="cvd-inputdiv">
        <label className="cvd-h2">{this.props.label}</label>
        <div>
          <DatePicker  name={this.props.name} value={this.props.value} selected={this.props.selected} onSelect={this.props.change} onChange={this.props.change} onBlur={this.props.blur} dateFormat="dd/MM/yyyy" showYearDropdown scrollableMonthYearDropdown/>
        </div>
        <p  className="error" >  <span className="holder">.</span>
          {this.props.error.length > 0 &&  <span>{this.props.error}</span>}
        </p>
      </div>
      
    );
  }
}

