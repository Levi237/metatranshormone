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
                <section>
                    <img src="http://incomeactivator.com/custom/2605/images/KristenVierreggerMDsmallsitting.jpg"/>
                </section>
                <section>
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
                </section>
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
    }
    hr {
        width: 80%;
    }
    margin: 0;
    > h2 {
        display: none;
    }
    > section {
        &:first-of-type {
            width: 100%;
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
        > section {
            display: inline-block;
            vertical-align: middle;
            text-align: left;
            &:first-of-type {
                width: 50%;
            }
            &:last-of-type {
                width: 45%;
                padding-left: 5%;
                p {
                    font-size: 18px;
                }
            }
        }
    }
    @media screen and ( min-width: ${screensize.tablet} ) {
        width: 80%;
        margin: 0 10%;
        h2 {
            margin-top: 40px;
        }
        > h2 {
            display: block;
            text-align: center;
            margin-top: 40px;
        }
        > section {
            vertical-align: middle;
            > h2 {
                display: none;
            }
        }
    }
`;