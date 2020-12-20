import React  from 'react';
import Form2 from '../components/Form2'
import TopHeader from '../components/topHeader';
export default class PersonalInfo extends React.Component{
    constructor(props){
        super(props)
        this.state = {};
    }
render(){
    return(
    <div className = "personalInfo bcg">
        <TopHeader/>
        <div className = "info">
            <p className = "textPadd">Profile Info</p>
            <Form2/>
        </div>  
    </div>)
}
}