import React from "react";
import '../../style/layout/grid.css';
import ContactInput from '../ContactInputCVDataScreen/ContactInput';
import SelectInput from "../SelectInputCVDataScreen/SelectInput";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {StoreService} from "../../services/store.service";
import Button from "../button";

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mobileInput: "",
            countryInput: "",
            cityInput: "",
            streetInput: "",
            employmentInput: "",
            jobInput: "",
            facebookInput: "",
            instagramInput: "",
            linkedinInput: "",
            selectedBirth: null,
            selectedBeginOfWork: null,
            selectedEndOfWork: null
        }
    }

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let cachedUserData = StoreService.getStoreProperty('user');

        cachedUserData[name] = value;
        console.log(' handle input change -', cachedUserData);

        StoreService.updateStoreProperty('user', cachedUserData);
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div id="contact-form">
                <span className="color-light font-13-px">MOBILE</span><br/>
                <ContactInput
                    name="mobileInput"
                    placeholder="Mobile"
                    type="text"
                    classes="bg-light-blue border-1-light-blue color-black margin-top-10px"
                    value={this.state.mobileInput}
                    change={this.handleChange}
                />
                <br/>
                <span className="color-light font-13-px">COUNTRY</span>
                <SelectInput
                    name="country-select"
                    classes="bg-light-blue font-13px margin-top-10px border-radius-4 border-1-light-blue box-shadow-grey padding-13-18 box-sizing line-height-1-4-em width-100-perc"
                    value={this.state.countryInput}
                    change={this.handleChange}
                />
                <br/>
                <div className="d-flex justify-content-space-between max-width-820">
                    <div className="d-flex column  ">
                        <span className="color-light font-13-px">CITY</span>
                        <ContactInput
                            name="cityInput"
                            placeholder="City"
                            type="text"
                            classes="bg-light-blue border-1-light-blue"
                            value={this.state.cityInput}
                            change={this.handleChange}
                        />
                    </div>
                    <div className="d-flex column  ">
                        <span className="color-light font-13-px">STREET</span>
                        <ContactInput
                            name="streetInput"
                            placeholder="Street"
                            type="text"
                            classes="bg-light-blue border-1-light-blue"
                            value={this.state.streetInput}
                            change={this.handleChange}
                        />
                    </div>
                </div>
                <br/>
                <span className="color-light font-13-px">DATE OF BIRTH</span><br/>
                <DatePicker
                    className="bg-light-blue margin-top-10px width-100-perc"
                    placeholderText="Select date of birth"
                    selected={this.state.selectedBirth}
                    onChange={(date) => {
                        this.setState({
                            selectedBirth: date
                        })
                    }}
                    dateFormat='dd/MM/yyyy'
                    showYearDropdown
                    scrollableMonthYearDropdown
                />
                <br/>
                <br/>
                <div className="d-flex justify-content-space-between max-width-820">
                    <div className="d-flex column ">
                        <span className="color-light font-13-px">CURRENT EMPLOYMENT</span>
                        <ContactInput
                            name="employmentInput"
                            placeholder="Current employment"
                            type="text"
                            classes="bg-light-blue border-1-light-blue"
                            value={this.state.employmentInput}
                            change={this.handleChange}
                        />
                    </div>
                    <div className="d-flex column">
                        <span className="color-light font-13-px">JOB TITLE</span>
                        <ContactInput
                            name="jobInput"
                            placeholder="Job title"
                            type="text"
                            classes="bg-light-blue border-1-light-blue"
                            value={this.state.jobInput}
                            change={this.handleChange}
                        />
                    </div>
                </div>
                <br/>
                <div className="d-flex justify-content-space-between max-width-820">
                    <div className="d-flex column">
                        <span className="color-light font-13-px">BEGINNING OF WORK</span>
                        <DatePicker
                            className="bg-light-blue"
                            placeholderText="Select begining of work"
                            selected={this.state.selectedBeginOfWork}
                            onChange={(date) => {
                                this.setState({
                                    selectedBeginOfWork: date
                                })
                            }}
                            dateFormat='dd/MM/yyyy'
                            showYearDropdown
                            scrollableMonthYearDropdown
                        />
                    </div>
                    <div className="d-flex column">
                        <span className="color-light font-13-px">END OF WORK</span>
                        <DatePicker
                            className="bg-light-blue"
                            placeholderText="Select end of work"
                            selected={this.state.selectedEndOfWork}
                            onChange={(date) => {
                                this.setState({
                                    selectedEndOfWork: date
                                })
                            }}
                            dateFormat='dd/MM/yyyy'
                            showYearDropdown
                            scrollableMonthYearDropdown
                        />
                    </div>
                </div>
                <br/>
                <div className="d-flex  justify-content-space-between max-width-820">
                    <div className="d-flex column ">
                        <span className="color-light font-13-px">FACEBOOK LINK</span>
                        <ContactInput
                            name="facebookInput"
                            placeholder="Facebook link"
                            type="text"
                            classes="bg-light-blue border-1-light-blue"
                            value={this.state.facebookInput}
                            change={this.handleChange}
                        />
                    </div>
                    <div className="d-flex column">
                        <span className="color-light font-13-px">INSTAGRAM LINK</span>
                        <ContactInput
                            name="instagramInput"
                            placeholder="Instagram link"
                            type="text"
                            classes="bg-light-blue border-1-light-blue"
                            value={this.state.instagramInput}
                            change={this.handleChange}
                        />
                    </div>
                    <div className="d-flex column ">
                        <span className="color-light font-13-px">LINKEDIN LINK</span>
                        <ContactInput
                            name="linkedinInput"
                            placeholder="LinkedIn link"
                            type="text"
                            classes="bg-light-blue border-1-light-blue"
                            value={this.state.linkedinInput}
                            change={this.handleChange}
                        />
                    </div>
                </div>
                <br/><br/>
                <Button
                    classes="submit width-25-perc button"
                    content="Save"
                    type="Submit"
                />
            </div>
        );
    }
}
