import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Topbar from './Topbar';
import Profile from './Profile';
import Resonance from './Resonance';
import Tousunpeu from './Tousunpeu';
import Booksociety from './Booksociety';
import Apolo from './Apolo';
import Projets from './Projets';
import Banner from "./Banner.js";
import PageNotFound from './404_page';



function App() {


  return (
    <div className="App">
      <Router >

        <Switch>
          <Route path="/" exact component={Home} >
            <Home />
          </Route>
          <Route path="/Banner" exact component={Banner} >
            <Banner />
          </Route>
          <Route path="/404_page" component={PageNotFound} >
            <PageNotFound />
          </Route>
          <Route path="/topbar" exact component={Topbar} >
            <Topbar />
          </Route>
          <Route path="/profile" exact component={Profile} >
            <Profile />
          </Route>
          <Route path="/projets" exact component={Projets} >
            <Projets />
          </Route>
          <Route path="/Tousunpeusauvage" exact component={Tousunpeu} >
            <Tousunpeu/>
          </Route>
          <Route path="/Resonance" exact component={Resonance} >
            <Resonance/>
          </Route>
          <Route path="/Booksociety" exact component={Booksociety} >
            <Booksociety/>
          </Route>
          <Route path="/Apolo" exact component={Apolo} >
            <Apolo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
