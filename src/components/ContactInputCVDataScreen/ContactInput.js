import React from "react";

export default class ContactInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }


    render() {
        return(
            <div id="contact-input">
                <input
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    type={this.props.type}
                    className={this.props.classes}
                    value={this.props.value}
                    onChange={this.props.change}
                />
            </div>
        );
    }
}