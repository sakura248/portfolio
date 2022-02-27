import React from "react";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Layout/Navigation/Navigation";
import { Contaiiner, Section } from "./app.style";

function App() {
  return (
    <>
      <Navigation />
      <Contaiiner>
        <Section>
          <Hero />
        </Section>
      </Contaiiner>
    </>
  );
}

export default App;
