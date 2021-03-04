import React, { Component } from 'react';
import styled from 'styled-components';
import EmailForm from './EmailForm';
import { screensize } from '../../constants/screensize';

export default class Contact extends Component {
    render(){
        const { contact } = this.props;
        return(
            <TwoSectionsWrapper>
                <h1 class="title">Contact Us</h1>
                <TwoSections>
                    <LeftSection>
                        <NestedTwoSection>
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
                        </NestedTwoSection>
                        <hr/>
                    </LeftSection>
                    <RightSection>
                        <EmailForm><h2>Send Us a Message</h2></EmailForm>
                    </RightSection>
                </TwoSections>
            </TwoSectionsWrapper>
        );
    };
};


const TwoSectionsWrapper = styled.div`
    > h1 {
        text-align: center;
        position: absolute;
        right: 20px;
        top: calc(80px + 10vw);
        color: white;
        @media screen and ( min-width: ${screensize.small} ) {
            color: black;
            position: relative!important;
            top:0;
            right:0;
            left:0;
        }
    }
`;
const NestedTwoSection = styled.div`
    width:100%;
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
        @media screen and ( min-width: ${screensize.mobile} ) {
        width:100%;
        margin: 0;
        > section {
            display: inline-block;
            vertical-align: middle;
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
const LeftSection = styled.div`
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    h2 {
        margin-top: 40px;
    }
    hr {
        width: 80%;
    }
    @media screen and ( min-width: ${screensize.small} ) {
        width: 80%;
    }
    @media screen and ( min-width: ${screensize.mobile} ) {
        text-align: left;
        h2 {
            margin-top: 0px;
        }
    }
    @media screen and ( min-width: ${screensize.tablet} ) {
        width: 50%;
    }
`;
const RightSection = styled.div`
    //refer to form custom code
`;

const TwoSections = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    h2 {
        margin-bottom: 20px;
    }
    > div {
        display: block;
        vertical-align: top;
        @media screen and ( min-width: ${screensize.tablet} ) {
            width: 50%;
            display: inline-block;
        }
    }

`;