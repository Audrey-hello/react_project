
import './App.css';
import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './Services';
import Products from './Products';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Home />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
