import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from './constants/routes';
import { screens }          from './constants/screens';

import NavBar               from './components/nav/NavBar';
import NavMenu              from './components/nav/NavMenu';

export default class App extends Component {
  state = {}
  toggleMenu = () => {
    const hamburgerMenu = document.getElementById('menu');
    hamburgerMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('inactive');
  };
  render(){
    return (
      <AppContainer>
        <NavMenu toggleMenu={this.toggleMenu}/>
        <NavBar toggleMenu={this.toggleMenu}/>
        <Switch>
            <Route path={routes.HOME} exact render={() => <FullScreenContainer><h1>HELLO HOME</h1></FullScreenContainer>} />
            <Route path={routes.ROOT} render={() => <FullScreenContainer><h1>HELLO ROOT</h1></FullScreenContainer>} />
        </Switch>
        
      </AppContainer>
    );
  };
};

const AppContainer = styled.div`
  h1,h2,h3,ul {
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 100%;
  }
  h1 {
    text-align: center;
    text-transform: uppercase;
  }
`;
const FullScreenContainer = styled.div`
  width: 100vw;
  height: calc( 100vh - 120px );
  padding-top: 120px;
  background: var(--blue);
`;