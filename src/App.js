import React from "react";
import logo from './Pages/logo.png';
import './App.css';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import Blog from './Pages/Blog';

function App() {
  return (
  <div>
    <div>
    <nav className="navbar navbar-expand-sm bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src="logo192.png" alt="Avatar Logo" style={{width:40+'px'}} className="rounded-pill">
                </img>
            </a>
            <ul className="navbar-nav">
                      <li className="nav-item">  
                        <a className="navbar-brand" href="#">Logo</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Active</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/blog">Blog</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link disabled" href="#">Disabled</a>
                      </li>
                    </ul>
        </div>
    </nav> 
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">...</nav>
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark">...</nav>
    </div>
    <Blog />
  </div>

  );
}

export default App;