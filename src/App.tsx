import React from "react";
import { Container } from "./app.styles";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Layout/Footer/Footer";
import Navigation from "./components/Layout/Navigation/Navigation";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div id="outer-container">
      <Navigation />
      <Container id="page-wrap">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
