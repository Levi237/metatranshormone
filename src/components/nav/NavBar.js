import React, { Component } from 'react';
import { NavLink }          from 'react-router-dom';
import styled               from 'styled-components';
import * as routes          from '../../constants/routes';
import { screens }          from '../../constants/screens';
import NavHamburger         from './NavHamburger';
export default class NavBar extends Component {

    render(){
        return(
            <LocalWrapper>
                <LogoWrapper>
                    <img src="logo512.png"/><span>Metamoprhosis</span>
                </LogoWrapper>
                <NavWrapper>
                    <NavLink activeClassName="nav-active" to={routes.HOME} >HOME<hr/></NavLink>
                    <NavLink activeClassName="nav-active" to={routes.SERV} >SERVICES<hr/></NavLink>
                    <NavLink activeClassName="nav-active" to={routes.INFO} >ABOUT<hr/></NavLink>
                    <NavLink activeClassName="nav-active" to={routes.MAIL} >CONTACT<hr/></NavLink>
                    <NavHamburger toggleMenu={this.props.toggleMenu}/>
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
`;
const LogoWrapper = styled.div`
    display: inline-block;
    img{
        width: 80px;
        margin: 20px 0 0 20px;
    }
    span {
        position: absolute;
        top: 50px;
        left: 100px;
        @media screen and ( min-width: ${screens.mobile} ) {
            top: 96px;
            left: 25px;
        }
    }
`;
const NavWrapper = styled.div`
    display: inline-block;
    width: calc(100vw - 120px);
    text-align: right;
    vertical-align: top;
    font-size: 20px;
    line-height: 20px;
    margin-top: 50px;

    > a {
        font-size: 20px;
        color: #121916;
        margin-right: 50px;
        text-decoration: none;
        transition: .3s ease;
        hr {
            width: 0;
            height: 1px;
            border: 0;
            transition: .3s ease;
        }
        &:hover {
            cursor: pointer;
            color: var(--pink)!important;
            hr {
                width: 100%;
                background-color: var(--pink)!important;
            }
        }
        display: none;
        @media screen and ( min-width: ${screens.mobile} ) {
            display: inline-block;
        }
    }
`;
