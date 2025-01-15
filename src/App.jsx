import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Course from "./components/courses/Course";

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Course/>
    </>
  );
}

export default App;
