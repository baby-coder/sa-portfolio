import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import { HeaderAppBar, Home, Work, About, Projects, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <HeaderAppBar />
      </header>
      <Switch>
         <Route exact path='/' component={Home} />
         <Route path='/work' component={Work} />
         <Route path='/about' component={About} />
         <Route path='/projects' component={Projects} />
      </Switch>
      <Footer>
        <p style={{paddingTop: '2rem'}}>
          {'\u00A9'} 2019. Subramanian Arunachalam
        </p>
      </Footer>  
    </div>
  );
}

export default withRouter(App);
