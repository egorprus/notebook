import React, { useState } from 'react';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {

  let [login, setLogin] = useState();

  function logIn() {
    const loginInput = document.getElementById("login");
    setLogin(loginInput.value);
  }

  function logOut() {
    setLogin('');
  }

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
            {/* <Main login={ login } logOut={ logOut } />
            <Login logIn={ logIn } /> */}
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}