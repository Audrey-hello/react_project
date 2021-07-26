
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Services from './Services';
// import Products from './Products';
import Contact from './Contact';
import Yoga from './Yoga';
import Voyage from './Voyage';




function App() {
  return (
    <div className="App">
      <Router >
        <Navbar />
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
