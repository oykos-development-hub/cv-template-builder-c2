import React from 'react'
import Input from '../components/Input'
import SaveButton from '../components/SaveButton'
import AddProfileImage from '../components/AddProfileImage'
import Reset from '../components/Reset'
import '../style/personalinfo.css';
import {StoreService} from "../services/store.service";
export default class Form2 extends React.Component{
    constructor(props){
        super(props);
        let userData = StoreService.getStoreProperty('user');
        this.state = {
            fullname: userData.fullname,
            email: userData.email,
            password: userData.password,
            profileImage: "https://th.bing.com/th/id/OIP.OvQzNbdxGYBkWT7cyvmP-wHaHa?pid=Api&rs=1"
        }
    }
    imageHandler = (e) =>{
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
                this.setState({
                    profileImage: reader.result
                });
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }
    resethandler = () =>{
        if(this.state.profileImage === "https://th.bing.com/th/id/OIP.OvQzNbdxGYBkWT7cyvmP-wHaHa?pid=Api&rs=1"){
            this.setState({
                profileImage:"https://th.bing.com/th/id/OIP.OvQzNbdxGYBkWT7cyvmP-wHaHa?pid=Api&rs=1"
            })
        }else {
            this.setState({
                profileImage:"https://th.bing.com/th/id/OIP.OvQzNbdxGYBkWT7cyvmP-wHaHa?pid=Api&rs=1"
            })
        }
    }
    handleChange = (e) =>{
        e.preventDefault();
        const{name, value} = e.target;
        let cachedUserData = StoreService.getStoreProperty('user');
        cachedUserData[name] = value;
        StoreService.updateStoreProperty('user', cachedUserData);
        this.setState({
            [name]:value
        })
    }
    handlerSubmit = (e) =>{
        e.preventDefault();
        console.log(`
            FullName:${this.state.fullname}
            Email:${this.state.email}
            Password:${this.state.password}
            Image:${this.state.profileImage}
        `)
    }
    render() {
        const {profileImage} = this.state;
        return (
            <div className = "row">
                <form onSubmit = {this.handlerSubmit} className = "column" noValidate>
                    <label for = "fullname">FULL NAME</label>
                        <Input
                            name = "fullname"
                            type = "text"
                            value = {this.state.fullname}
                            change = {this.handleChange}
                        />
                    <label for = "email">EMAIL</label>
                        <Input
                            name = "email"
                            type = "email"
                            value = {this.state.email}
                            change = {this.handleChange}
                        />
                    <label for = "password">PASSWORD</label>
                        <Input
                            name = "password"
                            type = "password"
                            value = {this.state.password}
                            change = {this.handleChange}
                        />
                        <SaveButton
                            type = "submit"
                            classes = "button"
                            value = "Save"
                        >Save
                        </SaveButton>
                </form>
                <form  onSubmit = {this.handlerSubmit} className = "column" noValidate>
                    <label className = "label-image">PROFILE IMAGE</label>
                    <img src = {profileImage} className = "profile-image"/>
                    <AddProfileImage
                    name = "image"
                    id = "profileimg"
                    classses = "file-input"
                    type = "file"
                    onChange ={this.imageHandler}
                    />
                    <label className = "change-image" htmlFor = "profileimg">Change image</label>
                    <Reset
                    id = "reset"
                    type = "submit"
                    click = {this.resethandler}
                    />
                    <label className = "change-image change-image2" htmlFor = "reset">Reset</label>
                </form>
            </div>
        );
    }
}