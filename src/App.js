import React, { useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Developer from "./components/developer/Developer";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Subscribe from "./components/subscribe/Subscribe";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Developer></Developer>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
  );
}

export default App;
