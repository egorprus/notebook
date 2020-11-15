import React, { useEffect, useState } from 'react';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Other from './components/Other/Other';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>NOTEBOOK</h1>
        </header>
        <main className="main">
          <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/posts" component={ Main } />
            <Route component={ Other } />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}