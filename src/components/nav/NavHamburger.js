import React       from 'react';
import styled      from 'styled-components';

import { screensize } from '../../constants/screensize';

const NavHamburger = ({ toggleMenu }) => {
  return(
    <Hamburger name="toggleMenu" onClick={(e) => toggleMenu(e)}>
      <section/>
      <section/>
      <section/>
    </Hamburger>
  );
};

const Hamburger = styled.div`
  position: absolute;
  z-index: 9999;
  right: 0;
  margin: -10px 35px 0 0;

  section {
    margin: 6px 0;
    width: 35px;
    height: 4px;
    &:first-of-type{
      background-color: var(--lavender);
    }
    &:nth-of-type(2){
      background-color: var(--lavender);
    }
    &:last-of-type{
      background-color: var(--lavender);
    }
  }
  
  @media screen and ( min-width: ${screensize.mobile} ) {
      display: none;
  }
`;

export default NavHamburger;