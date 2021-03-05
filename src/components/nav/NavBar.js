import React, { Component } from 'react';
import { NavLink }          from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from '../../constants/routes';
import { screensize }       from '../../constants/screensize';

import NavHamburger         from './NavHamburger';
export default class NavBar extends Component {
    render(){
        return(
            <LocalWrapper>
                <LogoWrapper>
                    <NavLink activeClassName="nav-active" to={routes.ROOT} >
                        <img src="logo192.png"/>
                        <span>Metamoprhosis</span>
                    </NavLink>
                </LogoWrapper>
                <NavWrapper>
                    <NavLink activeClassName="nav-active" exact to={routes.ROOT} >HOME<hr/></NavLink>
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
    z-index: 9000;
    width: 100vw;
    height: 80px;
    max-height: 80px;
    @media screen and ( min-width: ${screensize.mobile} ) {
        height: 120px;
        max-height: 120px;
    }
`;
const LogoWrapper = styled.div`
    display: inline-block;
    > a {
        color: #121916;
        text-decoration: none;
        transition: .3s ease;
    }
    img{
        width: 60px;
        margin: 10px 0 0 20px;
        @media screen and ( min-width: ${screensize.mobile} ) {
            width: 80px;
            margin: 20px 0 0 20px;
        }
    }
    span {
        position: absolute;
        font-size: 12px;
        top: 30px;
        left: 80px;
        @media screen and ( min-width: ${screensize.mobile} ) {
            top: 96px;
            left: 25px;
        }
    }
`;
const NavWrapper = styled.div`
    display: inline-block;
    vertical-align: top;
    width: calc(100vw - 80px);
    margin-top: 30px;
    text-align: right;
    font-size: 20px;
    line-height: 20px;
    @media screen and ( min-width: ${screensize.mobile} ) {                                                                                          
        width: calc(100vw - 120px);
    }

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
            color: var(--lavender)!important;
            hr {
                width: 100%;
            }
        }
        display: none;
        @media screen and ( min-width: ${screensize.mobile} ) {
            display: inline-block;
        }
    }
`;
