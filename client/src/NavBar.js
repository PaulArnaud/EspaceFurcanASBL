import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return <nav class="menu"> <ul> <li><a href="#Accueil">Accueil</a></li> <li><a href="#Apropos">À propos</a></li><li><a href="#Contact">Contact</a></li></ul></nav>;
  }
}

export default NavBar;