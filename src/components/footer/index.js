import React, { Component } from 'react';
import styled               from 'styled-components';
import { NavLink }          from 'react-router-dom';
import * as routes          from '../../constants/routes';
import { screens }        from '../../constants/screens';

export default class Footer extends Component {
    render(){
        const { contact } = this.props
        return(
            <LocalWrapper>
                <section>
                    <h3>Quick Links</h3>
                    <NavLink activeClassName="nav-active" to={routes.HOME} >HOME</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.SERV} >SERVICES</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.INFO} >ABOUT</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.MAIL} >CONTACT</NavLink>
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
                <section>
                    <span>Built by <a href="https://levieiko.com">LeviEiko.com</a></span>
                </section>
            </LocalWrapper>
        )
    }
}

const LocalWrapper = styled.div`
    width: 100vw;
    height: 240px;
    background: var(--lavender);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
        ' left center right ';
    > section {
        padding: 40px;
        &:first-of-type{
            grid-name: left;
            h3 {
                padding-bottom: 10px;
            }
            a {
                display: block;
                text-decoration: none!important;
                color: #fff;
                @media screen and ( min-width: ${screens.desktop} ) {
                    display: inline-block;
                    margin: 0 5px 0 0;
                }
            }
            a.nav-active {
                text-decoration: underline!important;
                color: #fff!important;
            }
        }
        &:nth-of-type(2){
            grid-name: center;
            text-align: center;
        }
        &:nth-of-type(3){
            grid-name: right;
            text-align: right;
            span{
                vertical-align: bottom;
            }
        }
    }
    
`;  