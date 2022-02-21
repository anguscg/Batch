import React from 'react'
import Header from './Header'
import './App.css';
import GroupCards from "./GroupCards"
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1 className="title">Batch</h1>
      <Header />
      
      <BrowserRouter>
        <Switch>
            <Route path="/groups">
              <h1>Groups Page</h1>
            </Route>
          </Switch>
          <Switch>
            <Route path="/messages">
              <h1>Messages Page</h1>
            </Route>
          </Switch>
          <Switch>
            <Route path="/profile">
              <h1>Profile Page</h1>
            </Route>
          </Switch>
          <Switch>
            <Route path="/">
              <GroupCards />
            </Route>
          </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
