import React from "react";
import {Redirect, Link} from "react-router-dom";
import './style/personalCVdata.css';

export default class CVdataScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (

            <div className="cvd-wrapper">
                {
                    !!this.state.redirect && <Redirect to={this.state.redirect}/>
                }
                <div className="cvd-content">
                    <div className="cvd-section cvd-contact">
                        <h1 className="cvd-h1">Contact Info</h1>
                        <h2 className="cvd-h2">Mobile</h2>

                        <h2 className="cvd-h2">Address</h2>

                        <h2 className="cvd-h2">City</h2>

                        <h2 className="cvd-h2">Country</h2>

                        <h2 className="cvd-h2">Date of Birth</h2>
                    </div>
                    <div className="cvd-section cvd-work">
                        <h1 className="cvd-h1">Current Position</h1>
                        <h2 className="cvd-h2">Job Title</h2>

                        <h2 className="cvd-h2">Company</h2>

                        <h2 className="cvd-h2">Starting Date</h2>

                        <h2 className="cvd-h2">Description</h2>
                    </div> 
                    <div className="cvd-section cvd-social">
                        <h1 className="cvd-h1">Social Networks</h1>
                        <h2 className="cvd-h2">Facebook</h2>

                        <h2 className="cvd-h2">Instagram</h2>

                        <h2 className="cvd-h2">LinkedIn</h2>


                        
                    </div>  
                </div>
                
                
                
            </div>
        );
    }
}
