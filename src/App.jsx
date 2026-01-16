import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Information from "./components/Information/Information";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";

import "../src/index.css";

export default function App() {
  return(
    <>
      <div className="app">
        <Header />
        <Buttons />
        <Navbar />
        <Information />
        <Contact />
        <Footer />
      </div>
    </>
  )
}