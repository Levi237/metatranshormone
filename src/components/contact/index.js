import React, { Component } from 'react';
import styled from 'styled-components';
import EmailForm from './EmailForm';
import { screens } from '../../constants/screens';

export default class Contact extends Component {
    render(){
        const { contact } = this.props;
        return(
            <LocalWrapper>
                <h1 class="title">Contact Us</h1>
                <LeftSection>
                    <div>
                        <h2>
                            {contact.name}, {contact.title}
                        </h2>
                        <section>
                            <img src="http://incomeactivator.com/custom/2605/images/KristenVierreggerMDsmallsitting.jpg"/>
                        </section>
                        <section>
                            <h2>
                                {contact.name}
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
                    </div>
                    <hr/>
                </LeftSection>
                <RightSection>
                    <EmailForm><h2>Send Us a Message</h2></EmailForm>
                </RightSection>
            </LocalWrapper>
        );
    };
};


const LeftSection = styled.div`
max-width: 700px;
span {
    color: var(--lavender);
    font-weight: 800;
}
h2 {
    margin-top: 40px;
}
text-align: center;
    > div {
        width:100%;
        margin: 0;
        > h2 {
            display: none;
        }
        > section {
            // margin-top: 40px;
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
            }

        }
    }
    @media screen and ( min-width: ${screens.small} ) {
        width: 66%;
        max-width: 700px;
        margin: 0 auto;
    }
    @media screen and ( min-width: ${screens.mobile} ) {
        text-align: left;
        h2 {
            margin-top: 0px;
        }
        > div {
            width:100%;
            margin: 0;
            > section {
                width: 50%;
                display: inline-block;
                vertical-align: middle;
                margin-top: 40px;
                &:first-of-type {
                    width: 50%;
                    > img {
                    }
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
    }
    @media screen and ( min-width: ${screens.tablet} ) {
        width: 50%;
        // background-color: #ccc;
        > div {
            width: calc(66% - 20px);
            margin: 0 0 0 calc(17% + 20px)!important;
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
    }
`;
const RightSection = styled.div`
`;

const LocalWrapper = styled.div`
max-width: 1400px;
margin: 0 auto;
> h1 {
    text-align: center;
    position: absolute;
    right: 20px;
    top: calc(120px + 10vw);
    color: white;
  @media screen and ( min-width: ${screens.small} ) {
      color: black;
      position: relative!important;
      top:0;
      right:0;
      left:0;
    }
  }
h2 {
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 500;
}
hr {
    width: 80%;
    margin: calc(60px + .525em) auto 80px;
    overflow: visible;
    padding: 0;
    border: 0;
    height: 1px;
    // background-image: linear-gradient(to right, transparent, var(--blue), var(--pink), transparent);
    text-align: center;
}
hr:after {
    content: "▽";
    display: inline-block;
    position: relative;
    top: -0.525em;
    font-size: 1.5em;
    padding: 0 0.25em;
    background: transparent;
    color: var(--periwinkle);
}
> div {
    display: block;
    vertical-align: top;
    &:first-of-type {
        // width: 66%;
        // margin: 0 auto;
    }
}
@media screen and ( min-width: ${screens.mobile} ) {
    > div {
        width: 100%;
        vertical-align: top;
    }
}
    @media screen and ( min-width: ${screens.tablet} ) {
        // display: flex;
        // justify-content: center;
        // align-items: center;
        > div {
            width: 50%;
            display: inline-block;
            vertical-align: top;
        }
    }

`;