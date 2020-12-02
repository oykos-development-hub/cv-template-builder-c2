import React from "react";

export default class InputComponent extends React.Component {
    render() {
        return (
            <div className="inputdiv">
                <input id={this.props.name} name={this.props.name} placeholder={this.props.text} type={this.props.type}
                       value={this.props.value} onChange={this.props.change} onBlur={this.props.blur}/>
                <p className="error"><span className="holder">.</span>
                    {this.props.error.length > 0 && <span>{this.props.error}</span>}
                </p>
            </div>
        );
    }
}