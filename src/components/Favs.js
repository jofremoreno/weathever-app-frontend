import React, { Component } from 'react';
import NavBar from './NavBar';
import './navbar.css';

class Favs extends Component {
  render() {
    return (
      <div>
        <h1>Favorites:</h1>
        <NavBar>{NavBar}</NavBar>
      </div>
    );
  }
}

export default Favs;
