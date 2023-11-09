import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorial-list.component";
import AddTutorial from "./components/add-tutorial.component";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header></header>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Inveon
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to={"/tutorials"} className="nav-link">
                    Tutorial Listesi
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/add"} className="nav-link">
                    Tutorial Ekle
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="container mt-3">
          <Routes>
            <Route path="/" element={<TutorialsList />}></Route>
            <Route path="/tutorials" element={<TutorialsList />}></Route>
            <Route path="/add" element={<AddTutorial />}></Route>
            <Route path="/tutorials/:id" element={<Tutorial />}></Route>
          </Routes>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
