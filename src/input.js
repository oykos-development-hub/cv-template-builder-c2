import React from "react";
import './input.css';
export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valueForce: null
        };
    }
    render() {
        const value = this.state.valueForce !== null ? this.state.valueForce : this.props.inputValue;
        const type = this.props.inputType;
        let classes = "input z-3 ";
        let opts = {};
        if (this.props.label && !this.props.omitLabelMargin) {
            classes += " margin-t-20-i ";
        }
        if (this.props.maxLength) {
            opts.maxlength = String(this.props.maxLength);
        }
        if (this.props.disabled) {
            opts.disabled = true;
        }
        return (<div className="input-wrapper column relative">
            {
                !!this.props.label && <span
                    className="input-label transition-0-5-s"
                    style={this.props.labelStyle}
                >
                    {this.props.label}
                </span>
            }
            {
                type !== 'textarea' && <input
                    className={classes + ' ' + this.props.classes}
                    placeholder={this.props.placeholder}
                    value={value}
                    name={this.props.inputName}
                    onChange={(e) => {
                        if (this.props.changeHandle) {
                            this.props.changeHandle(e);
                        }
                        this.setState({
                            valueForce: e.target.value
                        });
                    }}
                    type={this.props.inputType}
                    {...opts}
                />
            }
            {
                type === 'textarea' && <textarea
                    className={classes + ' ' + this.props.classes}
                    placeholder={this.props.placeholder}
                    value={value}
                    name={this.props.inputName}
                    onChange={(e) => {
                        if (this.props.changeHandle) {
                            this.props.changeHandle(e);
                        }
                        /*this.setState({
                            valueForce: e.target.value
                        });*/
                    }}
                    rows={5}
                    {...opts}
                />
            }
        </div>)
    }
};