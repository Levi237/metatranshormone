import React, { Component } from 'react';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    render(){
        return(
            <LocalWrapper>
                <h1 class="title">Home</h1>
            </LocalWrapper>
        )
    }
}

const LocalWrapper = styled.div`
    background-image: url(orchids.png);
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    background-position: right bottom;
`;