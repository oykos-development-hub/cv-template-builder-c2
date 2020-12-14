import React from "react";

export default class SelectInput extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <div id="select-input">
                <select
                    name={this.props.name}
                    id=""
                    className={this.props.classes}
                    onChange={this.props.change}
                >
                    <option value="Montenegro">Montenegro</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Croatia">Croatia</option>
                    <option value="BiH">BiH</option>
                </select>
            </div>
        );
    }
}