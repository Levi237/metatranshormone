import React, { Component } from 'react';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    render(){
        return(
            <LocalWrapper>
                <h1>Home</h1>
            </LocalWrapper>
        )
    }
}

const LocalWrapper = styled.div`
    background-image: url(Trilpe-White-Orchids_05.png);
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    background-position: right bottom;
`;