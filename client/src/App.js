import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Logbook from "./pages/Logbook";
import Detail from "./pages/Detail";
import TSB from "./pages/TSB";
import Repair from "./pages/Repair";
import Maintenance from "./pages/Maintenance";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/logbook" component={Logbook} />
          <Route exact path="/logs/:id" component={Detail} />
          <Route exact path="/tsb" component={TSB} />
          <Route exact path="/repair" component={Repair} />
          <Route exact path="/maintenance" component={Maintenance} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
