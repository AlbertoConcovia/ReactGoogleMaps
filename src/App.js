import React            from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarBs         from './components/NavbarBs';
import Footer           from './components/Footer';

import Home             from './pages/Home';
import Consultations    from './pages/Consultations';
import About            from './pages/About';

import './App.css';


function App() {
  
  return (

  
    <Router>

      <NavbarBs/>

      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About'            component={About} />
          <Route path='/Consultations'    component={Consultations} />
      </Switch>

      <Footer />

    </Router>


  );
}

export default App;
