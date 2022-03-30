import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Navigation from "./components/Layout/Navigation/Navigation";
import Footer from "./components/Layout/Footer/Footer";
import { Container } from "./app.styles";

function App() {
  return (
    <div id="outer-container">
      <Navigation />
      <Container id="page-wrap">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
