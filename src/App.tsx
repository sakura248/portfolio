import React from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Navigation from "./components/Layout/Navigation/Navigation";
import { Container } from "./app.styles";

function App() {
  return (
    <div id="outer-container">
      <Navigation
      // pageWrapId={"page-wrap"}
      // outerContainerId={"outer-container"}
      />
      <Container id="page-wrap">
        <Hero />
        <About />
      </Container>
    </div>
  );
}

export default App;
