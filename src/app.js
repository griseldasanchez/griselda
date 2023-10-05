import React from 'react';
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
        Details
        <div>
          one
        </div>
        <div>
          two
        </div>
      </div>
   </div> 
  }
}

export default App;

