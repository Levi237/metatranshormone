import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from './constants/routes';

import NavBar               from './components/nav/NavBar';

export default class App extends Component {
  state = {}
  render(){
    return (
      <AppContainer>
        <NavBar/>
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
  height: 100vh;
  background: var(--blue);
`;