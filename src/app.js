import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import NavBar from './navBar';
import Home from './home';
import Food from './food';
import Finance from './finance';
// Styles
import styles from './styles.css';

class App extends React.Component {
  render() {
    return <div>
       <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/food" component={Food} />
          <Route path="/finance" component={Finance} />
        </Switch>
      </Router>
   </div> 
  }
}

export default App;

