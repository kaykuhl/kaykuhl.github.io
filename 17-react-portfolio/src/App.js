import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Skills from "./components/pages/Skills";
import Footer from "./components/Footer"

function App() {


  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/portfolio" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/skills" component={Skills} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;