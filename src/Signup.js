import React from 'react'
import './Signup.css'
import googleIcon from './images/googleIcon.svg' 
import facebookIcon from './images/facebookIcon.svg' 
import twitterIcon from './images/twitterIcon.svg' 

function Signup() {
    return (
        <>
            <div className="loginform" >
                <FormHeader title="Sign Up" />
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
            <FormInput type='text' description="Username" placeholder='Enter your username ' />
            <FormInput type='text' description="Phone No." placeholder='Enter your phone no. ' />
            <FormInput type='email' description="Email id" placeholder='Enter your email id  '/>
            <FormInput type='password' description="Password" placeholder='Enter your password '/>
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
    return (
        <div id="button" className="row">
            <button>{props.title}</button>
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

export default Signup ;
