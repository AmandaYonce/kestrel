import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Message";
import Account from "./Account"
import NotFound from "./NotFound";
import Faq from "../react/components/FAQ/faq"
import "./Assets.css"
import {BrowserRouter} from 'react-router-dom';


class App extends React.Component {

 

  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/kwitter" component={Home} />
        <Route exact path="/kwitter/profiles/:username" component={Profile} />
        <Route exact path="/kwitter/account/:username" component={Account}/>
        <Route exact path="/kwitter/messagefeed/:username" component={Profile}/>
        <Route exact path="/kwitter/faq" component={Faq}/>
        <Route path="*" component={NotFound} />
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
