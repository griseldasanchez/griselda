import React from 'react';
import food from '../../assets/images/food.jpeg';
import styles from './singleTile.css';


export default function SingleTile() {
  return (
   <div>
      <div class="single-tile">
        <img class="tile-image" src={food}></img> <br/>
        <div class="tile-date">October 5, 2023</div>
        <div class="tile-name">NAME OF ARTICLE</div>
        <div class="tile-continue">continue reading button...</div>
        </div>
   </div>
  )
}