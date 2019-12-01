import React from 'react';
import { Switch, withRouter, Route } from 'react-router-dom';
import { HeaderAppBar, Home } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <HeaderAppBar />
       <Switch>
         <Route exact path='/' component={Home} />
       </Switch>
      </header>
    </div>
  );
}

export default withRouter(App);
