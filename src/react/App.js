import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Account from "./Account"
import NotFound from "./NotFound";
import "./Assets.css"

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles/:username" component={Profile} />
        <Route exact path="/account/:username" component={Account}/>
        <Route exact path="/messagefeed/:username" component={Profile}/>
        <Route path="*" component={NotFound} />
      </Switch>
    );
  }
}

export default App;
