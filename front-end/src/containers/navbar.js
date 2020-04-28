import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Movie Administration</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/autor-create" className="nav-link">Create Autor</Link>
          </li>
          <li className="navbar-item">
          <Link to="/movie-create" className="nav-link">Create Movie</Link>
          </li>
          <li className="navbar-item">
          <Link to="/autor-list" className="nav-link">List of Autors</Link>
          </li>
          <li className="navbar-item">
          <Link to="/movie-list" className="nav-link">List of Movies</Link>
          </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;