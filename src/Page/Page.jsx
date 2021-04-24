import React from 'react';
import Nav from '../Nav/Nav';
import About from '../Components/About/About';
import Homepage from '../Components/Homepage/Homepage';
import Login from '../Components/Login/Login';
import '../CSS/Page.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
         <div>
        <Nav />
        <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        </Switch>
    </div> 
      </Router>
   
  );
}

export default App;
