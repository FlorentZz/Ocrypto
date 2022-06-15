import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './menuStyles.scss';
// import SearchBar from '../searchBar/searchBar';

function menu() {
  const navigate = useNavigate();
  const isLogged = localStorage.getItem('isLogged');

  return (
    <menu className="App-menu">
      <nav className="App-nav">
        <NavLink className="App-link" to="/dashboard">Cours des Cryptomonnaies</NavLink>
        <a className="App-link" href="/articles">Articles</a>
        <a className="App-link" href="/lexicon">Lexique</a>
        <a className="App-link" href="/learning">Parcours d'apprentissage</a>
        <a className="App-link" href="/faq">FAQ</a>
      </nav>
      {isLogged ? (
        <button onClick={() => navigate('/profile')} type="button" className="App-button-profile">Profil</button>
      ) : (
        <div className="App-button">
          <button onClick={() => navigate('/log-in')} type="button" className="App-button-signin">S'inscrire</button>
          <button onClick={() => navigate('/log-in')} type="button" className="App-button-login">Connexion</button>
        </div>
      )}
      {/* <SearchBar /> */}
      <label htmlFor="toggle" className="label-hamburger">☰</label>
      <input type="checkbox" id="toggle" />
    </menu>
  );
}

export default React.memo(menu);