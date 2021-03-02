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
            <Route path={routes.HOME} exact render={() => <FullScreenContainer><h1>Metamorphosis Home</h1></FullScreenContainer>} />
            <Route path={routes.SERV} exact render={() => <ScreenContainer><h1>Metamorphosis Services</h1></ScreenContainer>} />
            <Route path={routes.MAIL} exact render={() => <ScreenContainer><h1>Metamorphosis Contact</h1></ScreenContainer>} />
            <Route path={routes.INFO} exact render={() => <ScreenContainer><h1>Metamorphosis About</h1></ScreenContainer>} />
            <Route path={routes.ROOT} render={() => <FullScreenContainer><h1>Metamorphosis</h1></FullScreenContainer>} />
        </Switch>
        <FooterContainer>

        </FooterContainer>
      </AppContainer>
    );
  };
};

const AppContainer = styled.div`
  h1 {
    text-align: center;
  }
`;
const ScreenContainer = styled.div`
  width: 100vw;
  padding-top: 120px;
  min-height: calc(100vh - 360px );
  background-color: #fff;
`;
const FullScreenContainer = styled(ScreenContainer)`
  height: calc( 100vh - 120px );
`;
const FooterContainer = styled.div`
  width: 100vw;
  height: 240px;
  background: var(--pink);
`;
