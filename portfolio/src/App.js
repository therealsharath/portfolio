import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import bg from './bgVideo.mp4';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/">
              <video className="bgVideo" controls autoPlay muted loop>
                <source src={bg}></source>
              </video>
              <Navbar className="navbar"/>
              <Home/>
              <Footer/>
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
