import React from 'react';

// Components
import Tile from './tile';

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
        Griselda's Website
      </div>
      <div>
        Tiles will go her:
        <Tile />
      </div>
   </div> 
  }
}

export default App;

