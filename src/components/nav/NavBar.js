import React, { Component } from 'react';
import { NavLink }          from 'react-router-dom';
import styled               from 'styled-components';
import * as routes          from '../../constants/routes';
import { screens }          from '../../constants/screens';
export default class NavBar extends Component {

    render(){
        return(
            <LocalWrapper>
                <LogoWrapper>
                    <img src="logo512.png"/>
                </LogoWrapper>
                <NavWrapper>
                    <NavLink activeClassName="nav-active" to={routes.HOME} >HOME</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.SERV} >SERVICES</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.INFO} >ABOUT</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.MAIL} >CONTACT</NavLink>
                </NavWrapper>
            </LocalWrapper>
        )
    }
}

const LocalWrapper = styled.div`
    position: absolute;
    width: 100vw;
    height: 120px;
    max-height: 120px;
    display: none;
    @media screen and ( min-width: ${screens.mobile} ) {
        display: block;
    }
`;
const LogoWrapper = styled.div`
    display: inline-block;
    img{
        width: 80px;
        margin: 20px;
    }
`;
const NavWrapper = styled.div`
    display: inline-block;
    width: calc(100vw - 120px);
    text-align: right;
    vertical-align: top;
    font-size: 20px;
    line-height: 20px;
    margin-top: 40px;
    a {
        margin-right: 50px;
        text-decoration: none;
        &:hover {
            cursor: pointer;
        }
    }
`;