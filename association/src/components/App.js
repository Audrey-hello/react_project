import './App';
import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Comite from './Comite';
import Banner from './Banner';
import Banner2 from './Banner2';
import Banner3 from './Banner3';
import Intro from './Intro';
import Engager from './Engager';
import Charte from './Charte';
import Contact from './Contact';
import Contenus from './Contenus';
import PageNotFound from './404_page';


function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Switch>
            <Route path="/Navbar" exact component={Navbar} >
              <Navbar />
            </Route>
            <Route path="/Banner" exact component={Banner} >
              <Banner />
            </Route>
            <Route path="/Banner3" exact component={Banner3} >
              <Banner />
            </Route>
            <Route path="/Banner2" exact component={Banner2} >
              <Banner2 />
            </Route>
            <Route path="/Intro" exact component={Intro} >
              <Intro />
            </Route>
            <Route path="/Engager" exact component={Engager} >
              <Engager />
            </Route>
          <Route path='/' exact component={Home}/>
            <Route path='/Contact' exact component={Contact} />
          <Route path='/Charte' exact component={Charte} />
            <Route path='/Contenus' exact component={Contenus} />
          <Route path='/Comite' exact component={Comite} />
            <Route path="/404_page" exact={true} component={PageNotFound} >
              <PageNotFound />
            </Route>
        </Switch>
      </Router>
      </>
    </div>

  );
}

export default App;
