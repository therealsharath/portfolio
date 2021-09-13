import React from 'react';
import Main from './Main.jsx';
import Story from './Story.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;