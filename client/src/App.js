import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Logbook from "./pages/Logbook";
import Detail from "./pages/Detail";
import Repair from "./pages/Repair";
import Maintenance from "./pages/Maintenance";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Footer from "./components/Footer";
require("dotenv").config();

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/logbook" component={Logbook} />
          <Route exact path="/logs/:id" component={Detail} />
          <Route exact path="/repair" component={Repair} />
          <Route exact path="/maintenance" component={Maintenance} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
