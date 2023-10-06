import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import NavBar from './navBar';
import Home from './home';
import Food from './food';
import Finance from './finance';
// Styles
import styles from './styles.css';

const basename = '/griselda';

class App extends React.Component {
  render() {
    return <div>
       <Router basename={basename}>
        <NavBar />
        <Switch>
          <Route exact path={basename + '/'} component={Home} />
          <Route path={basename + "/food"} component={Food} />
          <Route path={basename + "/finance"} component={Finance} />
        </Switch>
      </Router>
   </div> 
  }
}

export default App;

