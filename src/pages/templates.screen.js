import React from "react";
import {Redirect} from "react-router-dom";
import TopHeader from "../components/topHeader";
import asyncComponent from "../components/async-component";
import MVTemplate from "../templates/mv-template";
import {StoreService} from "../services/store.service";

export default class TemplatesScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    renderTemplateAsync() {
        const AsyncComponent = asyncComponent(() => {
            return import('../templates/mv-template.js');
        });
    }

    renderPickedTemplate() {
        const pickedTemplate = Number(this.state.pickedTemplate);
        const userData = StoreService.getStoreProperty('user');
        let template = '';

        if (pickedTemplate) {
            switch (pickedTemplate) {
                case 1:
                    template = (<MVTemplate data={userData}/>);
                    break;
                case 2:
                    template = (<div>Drugi template</div>);
                    break;
            }
        }

        return template;
    }

    render() {
        return (<div className="cv-data-screen column">
            <TopHeader/>

            {
                !!this.state.redirect && <Redirect to={this.state.redirect}/>
            }

            <div className='left-side flex padding-h-10perc margin-v-15'>
                <div
                    className="sidebar column self-stretch align-center justify-start"
                    style={{
                        backgroundColor: '#e3e3e3'
                    }}
                >
                    <div
                        style={{
                            width: '120px',
                            height: '150px',
                            backgroundColor: '#fff'
                        }}
                        className="flex pointer align-center justify-center template margin-10"
                        onClick={() => {
                            this.setState({
                                pickedTemplate: 1
                            });
                        }}
                    >
                        Milica CV
                    </div>

                    <div
                        style={{
                            width: '120px',
                            height: '150px',
                            backgroundColor: '#fff'
                        }}
                        className="flex pointer align-center justify-center template margin-10"
                        onClick={() => {
                            this.setState({
                                pickedTemplate: 2
                            });
                        }}
                    >
                        Template #2
                    </div>
                </div>

                <div className="template-wrapper grow-1 padding-10 self-stretch">
                    {this.renderPickedTemplate()}
                </div>
            </div>
        </div>);
    }
}
