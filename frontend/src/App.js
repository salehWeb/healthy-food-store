import React from 'react'
import About from './commponent/content/content'
import Topics from './commponent/Topics/Topics'
import Home from './commponent/Home/Home'
import Nav from './commponent/navpar/Nav';
import Footer from './commponent/Footer/Footer'
import Login from './commponent/Login/Login'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Fragment
} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes >
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/topice" element={<Topics />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes >
        <Footer />
      </Router>
    </>
  );
}

export default App;
