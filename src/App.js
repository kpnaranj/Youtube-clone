import React from 'react';
import './App.css';
import Header from './Header';
import SearchPage from './SearchPage';
import Sidebar from './Sidebar';
import Recommendations from './Recommendations';
import {BrowserRouter as Router, Switch, Route}from "react-router-dom";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      {/*<h1>Hello Clever Programmer, let's build Youtube Clone :rocket</h1>*/}
      <Router>
        <Header/>
        <Switch>

        <Route path="/search/:searchTerm">
          <div className = "app__page">
            <Sidebar/>
            <SearchPage/>
          </div>
        </Route>

        <Route path="/">
          <div className = "app__page">
            <Sidebar/>
            <Recommendations/>
          </div>
        </Route>

        </Switch>
      </Router>

      
      
    </div>
  );
}

export default App;
