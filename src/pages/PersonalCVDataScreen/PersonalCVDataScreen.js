import React from 'react';
import '../../style/layout/grid.css';
import ContactForm from '../../components/ContactFormCVDataScreen/ContactForm';

export default class PersonalCVDataScreen extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="personal-account-screen"
                 className="d-flex  bg-dark-1 min-h-100-vh align-items-center justify-content-center padding-top-1-perc padding-bottom-5-perc">
                <div
                    className="d-flex justify-content-center width-63-perc padding-top-1-perc padding-bottom-5-perc min-h-95-vh bg-white border-radius-10 box-shadow-l-b-5 box-shadow-r-t-5 ">
                    <div className=" width-85-perc ">
                        <h3 className=" m-t-5-perc font-20px default-font color-light">Contact info</h3>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        );
    }
}