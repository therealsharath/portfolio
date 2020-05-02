import React from 'react';
import Main from './components/Main.jsx';
import Story from './components/Story.jsx';
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
              <Story/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
