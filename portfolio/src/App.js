import React from 'react';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/">
              <Main/>
            </Route>
            <Route path="/story">
              STORY
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
