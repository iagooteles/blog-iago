import { useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

import { GlobalStyle } from "./styles/global";

export function App() {
  const [active, setActive] = useState("Home");

  function setHomeOpenning() {
    setActive("Home")
  };

  function setAboutOpenning() {
    setActive("About")
  };

  function setContactOpenning() {
    setActive("Contact")
  };


  
  return (
    <div className="App">
        <Header 
        setAboutOpenning={setAboutOpenning} 
        setHomeOpenning={setHomeOpenning}
        setContactOpenning={setContactOpenning}
        />

        {active === "Home" && <Home />}
        {active === "About" && <About />}
        {active === "Contact" && <Contact />}

        <GlobalStyle />
    </div>
  );
}
