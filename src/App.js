/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import PlayList from './pages/PlayList';
import Template from './pages/Template'
import Artist from './pages/Artist'
import PlaylistBiblio from './pages/PlaylistBiblio'
import Albums from './pages/Albums';
//import Search from './pages/Search';

function App() {
  return (
    <Router>
      <Route exact path="/Login" component={Login}/>
      <Template>
        <Route exact path="/" component={Home} />
        <Route exact path="/artist" component={Artist} />
        <Route exact path="/playlist-biblio" component={PlaylistBiblio} />
        <Route exact path="/album" component={Albums} />
        <Route exact path="/playlist/:name" component={PlayList} />
        <Route exact path="/collection/:name" component={PlayList} />
      </Template>
    </Router>
  );
}

export default App;
