import React, { Component } from 'react';
import { Switch, Route }    from 'react-router-dom';
import styled               from 'styled-components';

import * as routes          from './constants/routes';
import { screensize }          from './constants/screensize';

import NavBar               from './components/nav/NavBar';
import NavMenu              from './components/nav/NavMenu';
import Footer               from './components/footer';

import About                from './components/about';
import Contact              from './components/contact';
import Home                 from './components/home';
import Services             from './components/services';

export default class App extends Component {
  state = {
    contact: {
      name: 'Kristen Vierregger',
      title: 'MD',
      address: '8081 Stanton Ave.',
      suite: '#300',
      city: 'Buena Park',
      state: 'CA',
      zipcode: '90620',
      phone: '(714) 484-8000'
    },
}
  toggleMenu = () => {
    const hamburgerMenu = document.getElementById('menu');
    hamburgerMenu.classList.toggle('active');
    hamburgerMenu.classList.toggle('inactive');
  };
  render(){
    const { contact } = this.state
    return (
      <AppContainer>
        <NavMenu toggleMenu={this.toggleMenu}/>
        <NavBar toggleMenu={this.toggleMenu}/>
        <Switch>
            <Route path={routes.ROOT} exact render={() => 
              <FullScreenContainer>
                <Home/>
              </FullScreenContainer>
              } />
            <Route path={routes.SERV} exact render={() => 
              <>
                <ScreenContainer>
                  <Services/>
                </ScreenContainer>
                <Footer contact={contact}/>
              </>
              } />
            <Route path={routes.MAIL} exact render={() => 
              <>
                <ScreenContainer>
                  <Contact contact={contact}/>
                </ScreenContainer>
                <Footer contact={contact}/>
              </>
              } />
            <Route path={routes.INFO} exact render={() => 
              <>
                <ScreenContainer>
                  <About/>
                </ScreenContainer>
                <Footer contact={contact}/>
              </>
              } />
            <Route path={routes.ROOT} render={() => 
              <FullScreenContainer><h1 class="title">Metamorphosis</h1></FullScreenContainer>
              } />
        </Switch>
      </AppContainer>
    );
  };
};

const AppContainer = styled.div`
  h1.title {
    margin-bottom: 40px!important;
    text-align: center;
    @media screen and (min-width: ${ screensize.mobile}) {
      margin-top: 40px;
    }
  }
`;
const Container = styled.div`
  width: 100vw;
  padding-top: 120px;
  background-color: #fff;
  transition: height .3s ease;
`;
const ScreenContainer = styled(Container)`
  padding-bottom: 60px;
  min-height: calc(100vh - 360px );
  background-color: #fff;
`;
const FullScreenContainer = styled(Container)`
  height: calc( 100vh - 120px );
  padding-bottom: 0;
`;
