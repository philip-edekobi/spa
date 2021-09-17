import React from "react";
import Home from "./Home"
import About from './About'
import Contact from './Contact'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

export default class App extends React.Component{

  render(){
    return(
      <Router>
      <div>
        <header id="top-header">
          <h1>First SPA</h1>
          <nav>
            <span className="nav-item"><Link to='/'>Home</Link></span>
            <span className="nav-item"><Link to='/about'>About</Link></span>
            <span className="nav-item"><Link to='contact'>Contact</Link></span>
          </nav>
        </header>
      </div>
      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/about'><About /></Route>
        <Route exact path='/contact'><Contact /></Route>
      </Switch>
      </Router>
    );
  }
};
