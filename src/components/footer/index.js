import React, { Component } from 'react';
import styled               from 'styled-components';
import { NavLink }          from 'react-router-dom';
import * as routes          from '../../constants/routes';
import { screensize }        from '../../constants/screensize';

export default class Footer extends Component {
    render(){
        const { contact } = this.props
        return(
            <LocalWrapper>
                <section>
                    <h3>Quick Links</h3>
                    <NavLink activeClassName="nav-active" exact to={routes.ROOT} >HOME</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.SERV} >SERVICES</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.INFO} >ABOUT</NavLink>
                    <NavLink activeClassName="nav-active" to={routes.MAIL} >CONTACT</NavLink>
                </section>
                <section>
                    <div>
                        <h3>
                            {contact.name},{" "}{contact.title}
                        </h3>
                        <p>
                            {contact.address}
                            {" "}
                            {contact.suite}
                            <br/>
                            {contact.city},{" "}{contact.state}{" "}{contact.zipcode}
                            <br/>
                            <span>{contact.phone}</span>
                        </p>
                    </div>
                </section>
                <section>
                    <div>
                        <a href="https://levieiko.com"><img src="https://levieiko.com/logo.png" atl="levieiko.com" title="levieiko.com"/></a>
                        <span>Built by <a href="https://levieiko.com">LeviEiko.com</a></span>
                    </div>
                </section>
            </LocalWrapper>
        )
    }
}

const LocalWrapper = styled.div`
    width: 100vw;
    height: 400px;
    background: var(--black);
    color: #fff;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
    grid-template-areas:
        ' center'
        ' left '
        ' right ';
    @media screen and (min-width: ${screensize.mobile}){
        height: 180px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-template-areas:
            ' left center right ';

    }
    > section {
        position: relative;
        padding: 0 30px;
        @media screen and (min-width: ${screensize.mobile}){
            padding: 30px;
        }
        &:first-of-type{
            grid-area: left;
            h3 {
                padding-bottom: 10px;
            }
            a {
                text-decoration: none!important;
                color: #fff;
                margin: 0 10px 5px 0;
                display: block;
                &:last-of-type {
                    margin: 0 0 0 0;
                }
                @media screen and (min-width: ${screensize.mobile}){
                    display: inline-block;
                }
            }
            a.nav-active {
                text-decoration: underline!important;
                color: #fff!important;
            }
        }
        &:nth-of-type(2){
            grid-area: center;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            h3 {
                margin-bottom: 10px;
            }
            p {
                font-size: 14px;
            }
        }
        &:nth-of-type(3){
            grid-area: right;
            text-align: right;
            >div {
                position: absolute;
                bottom: 30px;
                right: 30px;
                img{
                    width: 40px;
                    margin-top: 60px;
                }
                span{
                    display: block;
                }
            }
            a {
                color: #fff;
                text-decoration: none;
                &:hover {
                    color: var(--blue);
                }
            }
        }
    }
    
`;  