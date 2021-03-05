import React, { Component } from 'react';
import styled               from 'styled-components';

import { screensize }          from '../../constants/screensize';
// import { NavLink }          from 'react-router-dom';

export default class About extends Component {
    render(){
        return(
            <LocalWrapper>
                <h1 class="title">Metamorphosis Transgender Clinic</h1>
                <GridContainer>
                    <section>
                        <div>
                            <h2>About Us</h2>
                            <br/>
                            <p>
                                At Metamorphosis, we believe your best is yet to come. 
                                And whatever change you seek, we will be present to support
                                you through it. Whether bio-identical hormone replacement or 
                                skin rejuvenation.... welcome to the next stage of you. We 
                                are your like your personal concierge medical office with a 
                                dedicated and highly qualified doctor who attends to your needs.  
                            </p>
                            <br/>
                            <p>
                                Our MISSION is to provide a safe, nurturing environment in which 
                                patients may access personalized therapies delivered at the 
                                highest standard of care, enabling them to heal and transform 
                                into their full potential for wellness.
                            </p>
                        </div>
                    </section>
                    <section>
                        <div>
                            <img src="officephoto.jpg"/>
                        </div>
                    </section>
                    <section>
                        <div>
                            <img src="http://incomeactivator.com/custom/2605/images/KristenVierreggerMDsmallsitting.jpg"/>
                        </div>
                    </section>
                    <section>
                        <div>
                            <h2>Meet the Doctor</h2>
                            <br/>
                            <p>
                                Dr. Vierregger earned her medical degree from 
                                the prestigious Perelman School of Medicine at 
                                the University of Pennsylvania and completed 
                                her Pathology residency at the University of 
                                California, Irvine.
                            </p>
                            <br/>
                            <p>
                                She received further specialty training with the 
                                Bioidentical Hormone Initiative (Drs. Erika Schwartz 
                                and Joseph Raffaele) and certification at the National 
                                Laser Institute, the industry leader in laser education 
                                and medical aesthetics.
                            </p>
                            <br/>
                            <p>
                                Dr. V is a member of The World Professional 
                                Association for Transgender Health (WPATH). She is 
                                a Diplomate in Regenerative Medicine - American Academy 
                                of Anti Aging Medicine.
                            </p>
                            <br/>
                            <p>
                                <i>
                                    "My passion is delivering the highest 
                                    standard of care to promote her patients' goals for 
                                    optimal health, well-being, and beauty."
                                </i>
                            </p>
                        </div>
                    </section>
                </GridContainer>
            </LocalWrapper>
        );
    };
};

const LocalWrapper = styled.div`
`;
const GridContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto;
    grid-template-areas: 
    ' two '
    ' one ' 
        ' three' 
        ' four ';
    @media screen and (min-width: ${ screensize.tablet}) {
        max-width: 1000px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        grid-template-areas: 
        ' one two '
        ' three four ';
    }
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px 0;
        p {
            width: 80%;
            margin: 0 auto;
        }
        >div {
            width: 100%;
            > img {
                width: 100%;
            }
        }
        &:first-of-type {
            grid-area: one;
            h2 {
                text-align: center;
            }
        }
        &:nth-of-type(2) {
            grid-area: two;
            padding: 0 0 30px;
        }
        &:nth-of-type(3) {
            grid-area: three;
        }
        &:nth-of-type(4) {
            grid-area: four;
            h2 {
                text-align: center;
            }
        }
        &:nth-of-type(even) {
        }
        @media screen and (min-width: ${ screensize.tablet}) {
            padding: 30px;
            &:first-of-type {
                h2 {
                    text-align: left;
                }
            }
            &:nth-of-type(2) {
                padding: 30px;
            }
            p {
                width: 100%;
            }
        }
    }
`;