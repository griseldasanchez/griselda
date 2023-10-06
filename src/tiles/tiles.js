import React from 'react';
import SingleTile from './singleTile';
import styles from './tiles.css';

export default function Tiles() {
  return (
    <div>
      <div class="tiles-wrapper">
          <SingleTile />
          <SingleTile />
          <SingleTile />
          <SingleTile />
      </div>
    </div>
  )
}