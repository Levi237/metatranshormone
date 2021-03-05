import React, { Component } from 'react';
import styled from 'styled-components';
import { screensize } from '../../constants/screensize';

export default class TwoColumns extends Component {
    render(){
        return(
            <TwoColumnsWrapper>
                {this.props.children}
            </TwoColumnsWrapper>
        );
    };
};


const TwoColumnsWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    > div {
        display: block;
        vertical-align: top;
        max-width: 600px;
        margin: 0 auto;
        @media screen and ( min-width: ${screensize.tablet} ) {
            width: 50%;
            display: inline-block;
        }
    }

`;