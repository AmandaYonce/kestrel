import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Message";
import Account from "./Account"
import NotFound from "./NotFound";
import Faq from "../react/components/FAQ/faq"
import "./Assets.css"
//import {BrowserRouter} from 'react-router-dom';

//heroku backend https://git.heroku.com/kestrel24.git
//heroku frontend https://kestrel24.herokuapp.com/


class App extends React.Component {

 

  render() {
    return (
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/profiles/:username" component={Profile} />
        <Route exact path="/account/:username" component={Account}/>
        <Route exact path="/messagefeed/:username" component={Profile}/>
        <Route exact path="/faq" component={Faq}/>
        <Route path="*" component={NotFound} />
        
      </Switch>
    );
  }
}

export default App;
