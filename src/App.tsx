import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Navigation from "./components/Layout/Navigation/Navigation";
import { Container } from "./app.styles";

function App() {
  return (
    <div id="outer-container">
      <Navigation />
      <Container id="page-wrap">
        <Hero />
        <About />
        <Skills />
      </Container>
    </div>
  );
}

export default App;
