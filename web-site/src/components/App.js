
import '../styles/App.css';
import React from 'react';
import { BrowserRouter as  Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Content from '../pages/Content';
import Yoga from '../pages/Yoga';
import Voyage from '../pages/Voyage';
import Coaching from '../pages/Coaching';
import Profile2 from './Profile2';
import Programme from '../pages/Programme';
import AllPosts from "./AllPosts.js";
import OnePost from "./OnePost.js";
import PageNotFound from '../pages/404_page';
import LazyLoad from 'react-lazyload';





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
            <LazyLoad>
              <Yoga />
            </LazyLoad>
          </Route>
          <Route path="/voyage" exact component={Voyage} >
            <LazyLoad>
              <Voyage />
            </LazyLoad>
          </Route>
          <Route path="/coaching" exact component={Coaching} >
            <LazyLoad>
             <Coaching />
            </LazyLoad>
          </Route>
          <Route path="/programme" exact component={Programme} >
            <Programme />
          </Route>
          <Route path="/content" exact component={Content} >
            <LazyLoad>
              <Content />
            </LazyLoad>
          </Route>
          <Route path="/profile2" exact component={Profile2} >
            <Profile2 />
          </Route>
          <Route component={AllPosts} path="/AllPosts" exact  />
          <Route component={OnePost} path="/:slug" />
          <Route path="/404_page" exact={true} component={PageNotFound} >
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
