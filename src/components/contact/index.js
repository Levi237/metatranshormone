import React, { Component } from 'react';
import styled               from 'styled-components';

import { screensize }       from '../../constants/screensize';

import TwoColumns           from '../../constants/TwoColumns'
import EmailForm            from './EmailForm';

export default class Contact extends Component {
    render(){
        const { contact } = this.props;

        const leftSectionContact = 
            <LeftSectionContact>
                <h2>
                    {contact.name}, {contact.title}
                </h2>
                <TwoColumns>
                <div>
                    <img src="http://incomeactivator.com/custom/2605/images/KristenVierreggerMDsmallsitting.jpg"/>
                </div>
                <div>
                    <h2>
                        {contact.name},{" "}{contact.title}
                    </h2>
                    <p>
                        {contact.address}
                        {" "}
                        {contact.suite}
                        <br/>
                        {contact.city},{" "}{contact.state}{" "}{contact.zipcode}
                        <br/>
                        <span>{contact.phone}</span>
                    </p>
                </div>
                </TwoColumns>
                <hr/>
            </LeftSectionContact>
        ;
        const rightSectionContact =
            <EmailForm><h2>Send Us a Message</h2></EmailForm>
        ;
        return(
            <ContactWrapper>
                <h1 class="title contact">Contact Us</h1>
                <TwoColumns>
                    <div>
                        {leftSectionContact}
                    </div>
                    <div>
                        {rightSectionContact} 
                    </div>
                </TwoColumns>
            </ContactWrapper>
        );
    };
};


const ContactWrapper = styled.div`
    > h1.contact {
        text-align: center;
        position: absolute;
        right: 20px;
        top: calc(80px - 20px + 10vw);
        color: white;
        @media screen and ( min-width: ${screensize.small} ) {
            color: black;
            position: relative!important;
            top:0;
            right:0;
            left:0;
        }
    }
    > div > div {
        vertical-align: top;
    }
`;
const LeftSectionContact = styled.div`
    width:100%;
    text-align: center;
    h2 {
        margin-top: 40px;
        padding-left: 20px;
    }
    hr {
        width: 80%;
    }
    margin: 0;
    > h2 {
        display: none;
    }
    > div > div {
        &:first-of-type {
            > img {
                width: 100%;
            }
        }
        &:last-of-type {
            p {
                font-size: 16px;
                line-height: 150%;
            }
            span {
                color: var(--lavender);
                font-weight: 800;
            }
        }
    }
    @media screen and ( min-width: ${screensize.small} ) {
        width: 80%;
        margin: 0 auto;
    }
    @media screen and ( min-width: ${screensize.mobile} ) {
        width:100%;
        margin: 0;
        h2 {
            margin-top: 0px;
        }
        > div > div {
            display: inline-block;
            vertical-align: middle;
            text-align: left;
            &:last-of-type {
                p {
                    font-size: 18px;
                    padding-left: 20px;
                }
            }
        }
    }
    @media screen and ( min-width: ${screensize.tablet} ) {
        width: 80%;
        margin: 0 10%;
        h2 {
            margin-top: 40px;
            margin-bottom: 50px;
            padding: 0;
        }
        > h2 {
            display: block;
            text-align: center;
            margin-top: 40px;
        }
        > div > div {
            vertical-align: middle;
            > h2 {
                display: none;
            }
        }
    }
`;