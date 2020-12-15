import React from "react";
import {Redirect} from "react-router-dom";
import TopHeader from "../components/topHeader";

export default class TemplatesScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (<div className="cv-data-screen column">
            <TopHeader/>

            {
                !!this.state.redirect && <Redirect to={this.state.redirect}/>
            }

            <div className='left-side'>
                templates
            </div>
        </div>);
    }
}
