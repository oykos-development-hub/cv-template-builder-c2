import React from "react";
import {Redirect} from "react-router-dom";
import Button from "./button";
import {StoreService} from "../services/store.service";

export default class TopHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (<div className="flex w-100-perc justify-between align-center margin-h-15 padding-h-15 border-box">
            {
                !!this.state.redirect && (<Redirect to={this.state.redirect}/>)
            }

            <div style={{
                fontSize: '20px',
                fontWeight: 'bold'
            }}>
                CV builder
            </div>

            <div className="flex justify-between">
                <Button
                    content="Log Out"
                    onclick={() => {
                        StoreService.clearStoreData();

                        this.setState({
                            redirect: '/login'
                        });
                    }}
                />
            </div>
        </div>);
    }
}
