import React from "react";
// import react, { useState } from "react";
// import Home from "./components/Home";
// import Services from "./components/Services";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Works from "./components/Works";
// import Blogs from "./components/Blogs";
import NavLeft from "./components/NavLeft";


// import { Route, Routes } from "react-router-dom";
// import { Route, Routes, Switch } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-screen flex bg-white-900">
      <NavLeft />
      {/* <div className="">
        <Home />
        <About />
        <Services />
        <Works />
        <Blogs />
        <Contact />
      </div> */}
    </div>
    // </>
  );
}

export default App;
