import React from 'react';
import { NavLink } from 'react-router-dom';

import './menuStyles.scss';
import SearchBar from '../SearchBar/searchBar';

function menu() {
  return (
    <menu className="App-menu">
      <nav className="App-nav">
        <NavLink className="App-link" to="/dashboard">Cours des Cryptomonnaies</NavLink>
        <a className="App-link" href="/articles">Articles</a>
        <a className="App-link" href="/lexicon">Lexique</a>
        <a className="App-link" href="/learning">Parcours d'apprentissage</a>
        <a className="App-link" href="/faq">FAQ</a>
      </nav>
      <div className="App-button">
        <button type="button" className="App-button-signin">S'inscrire</button>
        <button type="button" className="App-button-login">Connexion</button>
      </div>
      <SearchBar />
      <label htmlFor="toggle" className="label-hamburger">☰</label>
      <input type="checkbox" id="toggle" />
    </menu>
  );
}

export default React.memo(menu);
