import React, { Component } from 'react';
import styled               from 'styled-components';
import { screensize }       from '../../constants/screensize';
export default class EmailForm extends Component { 
    state = {
        emailValue: '',
        fNameValue: '',
        lNameValue: '',
        websiteValue: '',
        messageValue: ''
    };

    render(){
        const { emailValue, fNameValue, lNameValue, websiteValue, messageValue } = this.state

        return(
            <Form 
                // action={`https://${process.env.REACT_APP_MAILCHIMP_SRC}.us5.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&amp;id=${process.env.REACT_APP_MAILCHIMP_ID}`}
                method="POST" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className="validate" 
                target="_blank" 
                novalidate 
            >
                {this.props.children}
                <label htmlFor='MERGE1'>
                    <input 
                        type="text" 
                        name="FNAME" 
                        id="MERGE1" 
                        value={fNameValue}
                        placeholder="*First Name" 
                        onChange={(e)=>{this.setState({fNameValue: e.target.value});}}
                        required
                    />
                </label>
                <label htmlFor='MERGE2'>
                    <input 
                        type="text" 
                        name="LNAME" 
                        id="MERGE2" 
                        value={lNameValue}
                        placeholder="Last Name" 
                        onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
                    />
                </label>
                <label htmlFor='MERGE0'>
                    <input 
                        type="email" 
                        name="EMAIL" 
                        id="MERGE0"
                        value={emailValue}
                        placeholder="*Email" 
                        onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                        autoCapitalize="off" 
                        autoCorrect="off"
                        required
                     /> 
                </label>
                <label htmlFor='PHONE'>
                    <input 
                        type="phone" 
                        name="PHONE" 
                        id="PHONE" 
                        value={websiteValue}
                        placeholder="Phone Number" 
                        onChange={(e)=>{this.setState({websiteValue: e.target.value});}}
                    />
                </label>

                <label htmlFor='MESSAGE'>
                    <textarea 
                        type="text" 
                        maxlength="255"
                        name="MESSAGE" 
                        id="MESSAGE" 
                        value={messageValue}
                        placeholder="Message" 
                        onChange={(e)=>{this.setState({messageValue: e.target.value});}}
                    />
                </label>
                <AuthFilter aria-hidden="true"><input type="text" name="b_0e3bf36f8cbe7c4f0019bd050_fe06177933" tabindex="-1" value=""/></AuthFilter>
                <div className="clear">
                    <input type="submit" value="submit" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                </div>
              </Form> 
        );
    };
};

const AuthFilter = styled.div`
    position: absolute; left: -5000px;
`;

const Form = styled.form`
    position: relative;
    overflow: scroll;
    z-index: 5000;
    width: 80%;
    max-width: 600px;
    padding: 20px 0;
    background-color: #fff;
    margin: 20px auto;
    text-align: center;

    input {
        height: 36px;
        margin: 5px auto;
        border-width: 1px;
        border-radius: 0px;
        font-size: 18px;
    }
    input[type=submit] {
        position: relative;
        z-index: 5001;
        height: 58px;
        width: 200px;
        background-color: #fff;
        border: #181717 solid 1px;
        border-radius: 0;
        color: #181717;
        font-size: 18px;
        line-height: 100%;
        text-transform: uppercase;
    }
    button {
        border-radius: 0px;
        border: 1px solid black;;
        background: transparent;
    }
    .button,
    button {
        &:hover {
            background: rgba(41, 191, 255,.2);
        }
    }

    label {
        display: inline-block;
        width: 44%;
        &:nth-of-type(even){
            margin-left: 1.75%
        }

        &:nth-of-type(5){
            width: 100%;
            input {
                width: 86%;
                padding: 5px 2%!important;
            }
        }
        &:nth-of-type(6){
            width: 100%;
            margin-left: 0!important;
        }
        input {
            width: 90%;
            padding: 5px 5%;
        }
        textarea {
            height: 120px;
            width: 86%;
            padding: 2%;
            margin: 5px 0;
            border: 1px solid black;
            border-radius: 0px;
            font-family: Montserrat, Arial;
            font-weight: 500;
            font-size: 16px;
            line-height: 20px;
            color: #473E4E;
        }
    }

    @media screen and (max-width: ${screensize.mobile}) {
        label {
            display: block;
            width: 90%;
            margin: 0 auto!important;
        }
    }
`;



