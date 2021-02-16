import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home';
import './styles/index.scss';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar/>
        <Switch>
            <Route path='/' exact component={Home}/>
        </Switch>
      <Footer/>
    </Router>
  )
};

export default App;