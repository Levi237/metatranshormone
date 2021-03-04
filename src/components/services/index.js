import React, { Component } from 'react';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

export default class Services extends Component {
    render(){
        return(
            <LocalWrapper>
                <h1 class="title">Our Services</h1>
                <iframe width="365" height="205" src="https://www.youtube.com/embed/i6HaVYg6kB4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </LocalWrapper>
        )
    }
}

const LocalWrapper = styled.div`
`;