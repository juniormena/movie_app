import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
//importar components
import Navbar from './containers/navbar';
import CreateAutor from "./components/create-autor";
import CreateMovie from "./components/create-movie";
import AutorList from "./containers/autor-list";
import MovieList from "./containers/movie-list";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <hr/>
        <Route path="/autor-create" exact component={CreateAutor}/>
        <Route path="/autor-list" exact component={AutorList}/>
        <Route path="/movie-create" exact component={CreateMovie}/>
        <Route path="/movie-list" exact component={MovieList}/>
      </div>
    </Router>
  );
}

export default App;
