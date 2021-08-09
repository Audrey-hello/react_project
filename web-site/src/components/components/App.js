
import './App.css';
import React from 'react';
import Topbar from './Topbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Services from './Services';
// import Products from './Products';
import Contact from './Contact';
import Content from './Content';
import Yoga from './Yoga';
import Voyage from './Voyage';
import Coaching from './Coaching';
import Profile2 from './Profile2';
import Events from './Events';
import Footer from './Footer';
import AllPosts from "./AllPosts.js";
import OnePost from "./OnePost.js";



function App() {

  return (
    <div className="App">
      <Router >

        <Switch>
          <Route path="/" exact component={Home} >
          <Home />
          </Route>
            <Route path="/contact" exact component={Contact} >
            <Contact />
          </Route>
            <Route path="/yoga" exact component={Yoga} >
            <Yoga />
            </Route>
            <Route path="/voyage" exact component={Voyage} >
              <Voyage />
            </Route>
            <Route path="/coaching" exact component={Coaching} >
            <Coaching />
          </Route>
          <Route path="/events" exact component={Events} >
            <Events />
          </Route>
          <Route path="/content" exact component={Content} >
            <Content />
          </Route>
          <Route path="/profile2" exact component={Profile2} >
            <Profile2 />
          </Route>
          <Route component={AllPosts} path="/AllPosts" exact  />
          <Route component={OnePost} path="/:slug" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
