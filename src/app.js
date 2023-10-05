import React from 'react';

// Components
import Tiles from './tiles/tiles';

// Styles
import styles from './styles.css';

class App extends React.Component {
  render() {
    return <div>
      <div id="header">
        <ul>
          <li href="#home">HOME</li>
          <li href="#about">ABOUT</li>
        </ul>
      </div>
      <div id="details">
        Griselda's Website Details 
      </div>
      <div>
        <Tiles />
      </div>
   </div> 
  }
}

export default App;

