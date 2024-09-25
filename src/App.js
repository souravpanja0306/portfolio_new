import React from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom"

// Component
import Navbar from "./components/Navbar"
import Layout from './components/Layout'

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




const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Layout>
            <Navbar />
            <Routes>
              <Route path={'/'} exact element={<Home />}></Route>
              <Route path={'/about'} element={<About />}></Route>
              <Route path={'/project'} element={<Project />}></Route>
              <Route path={'/experiences'} element={<Experiences />}></Route>
              <Route path={'/contact'} element={<Contact />}></Route>
              <Route path={'/*'} element={<Error/>}></Route>
            </Routes>
          </Layout>
        </Router>
      </Provider>
    </>
  )
}

export default App