import React, { Component } from 'react';
import styled from 'styled-components';
import EmailForm from './EmailForm';
import { screens } from '../../constants/screens';

export default class Contact extends Component {
    state = {
        location: {
            address: '8081 Stanton Ave. #300',
            city: 'Buena Park',
            state: 'CA',
            zipcode: '90620',
        },
        phone: '(714) 484-8000'
    }
    render(){
        const { location, phone } = this.state;
        return(
            <LocalWrapper>
                <LeftSection>
                    <div>
                        <section>
                            <img src="http://incomeactivator.com/custom/2605/images/KristenVierreggerMDsmallsitting.jpg"/>
                        </section>
                        <section>
                            <h2>
                                Kristen Vierregger, MD
                            </h2>
                            <p>
                                {location.address}
                                <br/>
                                {location.city},{" "}{location.state}{" "}{location.zipcode}
                                <br/>
                                {" "}{phone}
                            </p>
                        </section>
                    </div>
                </LeftSection>
                <RightSection>
                    <EmailForm/>
                </RightSection>
            </LocalWrapper>
        );
    };
};


const LeftSection = styled.div`
    // > div {
    //     width: calc(83% - 20px);
    //     margin: 0 0 0 calc(17% + 20px);
    //     > section {
    //         width: 50%;
    //         display: inline-block;
    //         vertical-align: top;
    //         margin-top: 40px;
    //         &:first-of-type {
    //             width: 50%;
    //             > img {
    //                 width: 100%;
    //             }
    //             h2 {
    //                 font-size: 24px;
    //             }
    //             p {
    //                 font-size: 18px;
    //                 margin-block-start: 10px;
    //                 margin-block-end: 0;
    //             }
    //         }
    //         &:last-of-type {
    //             width: 45%;
    //             padding-left: 5%;
    //         }
    //     }
    // }
    @media screen and ( min-width: ${screens.tablet} ) {
        > div {
            width: calc(83% - 20px);
            margin: 0 0 0 calc(17% + 20px);
            > section {
                width: 50%;
                display: inline-block;
                vertical-align: top;
                margin-top: 40px;
                &:first-of-type {
                    width: 50%;
                    > img {
                        width: 100%;
                    }
                    h2 {
                        font-size: 24px;
                    }
                    p {
                        font-size: 18px;
                        margin-block-start: 10px;
                        margin-block-end: 0;
                    }
                }
                &:last-of-type {
                    width: 45%;
                    padding-left: 5%;
                }
            }
        }
    }
`;
const RightSection = styled.div`
`;

const LocalWrapper = styled.div`
    > div {
        width: 50%;
        display: inline-block;
        vertical-align: top;
    }

`;