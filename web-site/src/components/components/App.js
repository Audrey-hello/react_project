
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Services from './Services';
// import Products from './Products';
import Contact from './Contact';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} >
          <Home />
          </Route>
          <Route path="/contact" exact component={Contact} >
          <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
