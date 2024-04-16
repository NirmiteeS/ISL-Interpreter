import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Feat_Section from "./Feat_Section";
import Service from "./Service";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Service />
        <Feat_Section />
        <About />
        <Footer />
        {/* <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/service" component={Service} />
          <Route path="/features" component={Feat_Section} />
          <Route path="/about" component={About} />
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
