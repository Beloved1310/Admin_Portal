import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Nav from "./Nav/Nav";
import AboutPage from "./Page/AboutPage";
import Homepage from "./Page/HomePage";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
