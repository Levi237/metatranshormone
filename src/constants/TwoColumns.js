import React            from 'react';
import styled           from 'styled-components';
import { screensize }   from './screensize';

const TwoColumns =({children})=> {
        return(
            <TwoColumnsWrapper>
                {children}
            </TwoColumnsWrapper>
        );
    }
;

const TwoColumnsWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    > div {
        max-width: 600px;
        margin: 0 auto;
        @media screen and ( min-width: ${screensize.tablet} ) {
            width: 50%;
            display: inline-block;
        }
    }
`;

export default TwoColumns;