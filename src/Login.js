import React from 'react'
import './Login.css'
import googleIcon from './images/googleIcon.svg'
import facebookIcon from './images/facebookIcon.svg'
import twitterIcon from './images/twitterIcon.svg'

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

import { useHistory } from 'react-router-dom'


function Login() {
    return (
        <>
            <div className="loginform" >
                <FormHeader title="Login ! Welcome back" />
                <Form />
                <OtherMethods />
            </div>
        </>
    );
}

const FormHeader = (props) => {
    return (
        <div>
            <h2 id="headerTitle" >{props.title}</h2>
        </div>
    );
}

const Form = (props) => {
    return (
        <div>
            <FormInput type='text' description="Email id" placeholder='Enter your email id  ' />
            <FormInput type='password' description="Password" placeholder='Enter your password ' />
            <FormButton title='Log in' />
        </div>
    );
}

const FormInput = (props) => {
    return (
        <div className='row'>
            <label>{props.description}</label>
            <input type={props.type} placeholder={props.placeholder} />
        </div>
    );
}

const FormButton = (props) => {
    let history = useHistory();
    return (
        <div id="button" className="row">
            <button
                onClick={() => {
                    history.push('/home')
                }}
            >{props.title}</button>
        </div>
    );
}

const OtherMethods = (props) => {
    return (
        <div id="alternativeLogin">
            <label>Or sign in with:</label>
            <div id="iconGroup">
                <Facebook img={facebookIcon} found={"image not found"} />
                <Twitter img={twitterIcon} found={"image not found"} />
                <Google img={googleIcon} found={"image not found"} />
            </div>
        </div>
    );
}

const Facebook = (props) => {
    return (
        <div>
            <img src={props.img} alt={props.found} id="facebookIcon" />
        </div>
    );
}

const Twitter = (props) => {
    return (
        <div>
            <img src={props.img} alt={props.found} id="twitterIcon" />
        </div>
    );
}

const Google = (props) => {
    return (
        <div>
            <img src={props.img} alt={props.found} id="googleIcon" />
        </div>
    );
}

export default Login;
