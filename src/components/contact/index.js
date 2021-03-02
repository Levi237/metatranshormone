import React, { Component } from 'react';
import styled from 'styled-components';
import EmailForm from './EmailForm';

export default class Contact extends Component {
    state = {

    }
    render(){
        return(
            <LocalWrapper>
                <div>
                    Kristen Vierregger, MD
                    8081 Stanton Ave. Ste 300
                    Buena Park, CA  90620
                    Telephone: (714) 484-8000
                </div>
                <EmailForm/>
            </LocalWrapper>
        )
    }
}

const LocalWrapper = styled.div`
    > div {
        width: 50%;
        display: inline-block;
    }

`;