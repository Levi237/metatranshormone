import React, { Component } from 'react';
import styled               from 'styled-components';

import { screensize }       from '../../constants/screensize';
import TwoColumns           from '../../constants/TwoColumns';
// import { NavLink }          from 'react-router-dom';

export default class About extends Component {
    render(){
        return(
            <LocalWrapper>
                <h1 class="title">Metamorphosis Transgender Clinic</h1>
                <TwoColumns>
                    <div>
                        <LeftSectionRowOne>
                            <img src="officephoto.jpg"/>
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
                        </LeftSectionRowOne>
                    </div>
                    <div>
                        <RightSectionRowOne>
                            <img src="officephoto.jpg"/>
                        </RightSectionRowOne>
                    </div>
                </TwoColumns>
                <TwoColumns>
                    <div>
                        <LeftSectionRowTwo>
                            <img src="http://incomeactivator.com/custom/2605/images/KristenVierreggerMDsmallsitting.jpg"/>
                        </LeftSectionRowTwo>
                    </div>
                    <div>
                        <RightSectionRowTwo>
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
                        </RightSectionRowTwo>
                    </div>
                </TwoColumns>
            </LocalWrapper>
        );
    };
};

const LeftSectionRowTwo= styled.section`

`;
const RightSectionRowTwo= styled.section`
    padding: 30px;
`;
const LeftSectionRowOne = styled.section`
> div{
    padding: 30px;
}
    img {
        @media screen and ( min-width: ${screensize.tablet} ) {
            display: none;
        }
    }
`;
const RightSectionRowOne = styled.section`
    img {
        display: none;
        @media screen and ( min-width: ${screensize.tablet} ) {
            display: block;
        }
    }
`;
const LocalWrapper = styled.div`
    > div > div {
        vertical-align: middle;
    }
    img {
        width: 100%;
    }
`;
