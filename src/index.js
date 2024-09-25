import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css';

// Pages
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from "./pages/About"
import Experiences from "./pages/Experiences"
import Project from "./pages/Project"
import Error from "./404"

// Redux
import store from './store/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path={'/'} exact element={<Home />}></Route>
        <Route path={'/about'} element={<About />}></Route>
        <Route path={'/projects'} element={<Project />}></Route>
        <Route path={'/experiences'} element={<Experiences />}></Route>
        <Route path={'/contact'} element={<Contact />}></Route>
        <Route path={'/*'} element={<Error />}></Route>
      </Routes>
    </Router>
  </Provider>
);