import React  from 'react';
import Input from '../components/Input'
export default class PersonalInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {};
    }
render(){
    return(
    <div className = "personalInfo bcg">
        <div className = "info">
            <p className = "textPadd">Profile Info</p>
            <Input
                name = "fullname"
                type = "text"
                text = "Full name"
            />
            <Input
                name = "email"
                type = "email"
                text = "Email"
            />
            <Input
                name = "password"
                type = "password"
                text = "Password"
            />
        </div>  
    </div>)
}
}