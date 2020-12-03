import React from 'react'
import Input from '../components/Input'
import SaveButton from '../components/SaveButton'
import AddProfileImage from '../components/AddProfileImage'
import Reset from '../components/Reset'
export default class Form2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            profileImage: "https://th.bing.com/th/id/OIP.OvQzNbdxGYBkWT7cyvmP-wHaHa?pid=Api&rs=1"
        }
    }
    render() {
        const {profileImage} = this.state;
        return (
            <div className = "row">
                <form  className = "column" noValidate>
                    <label for = "fullname">FULL NAME</label>
                        <Input
                            name = "fullname"
                            type = "text"
                        />
                    <label for = "email">EMAIL</label>
                        <Input
                            name = "email"
                            type = "email"
                        />
                    <label for = "password">PASSWORD</label>
                        <Input
                            name = "password"
                            type = "password"
                        />
                        <SaveButton
                            type = "submit"
                            classes = "button"
                            value = "Save"
                        >Save
                        </SaveButton>
                </form>
                <div className = "column">
                    <label className = "label-image">PROFILE IMAGE</label>
                    <img src = {profileImage} className = "profile-image"/>
                    <AddProfileImage
                    id = "profileimg"
                    classses = "file-input"
                    type = "file"
                    />
                    <label className = "change-image" htmlFor = "profileimg">Change image</label>
                    <Reset
                    id = "reset"
                    type = "submit"
                    />
                    <label className = "change-image change-image2" htmlFor = "reset">Reset</label>
                </div>
            </div>
        );
    }
}