import React from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Screens/AboutUs";
import HomeSreen from "./Screens/HomeSreen";
import NotFound from "./Screens/NotFound";

function App() {



  return (
    <Routes>

      <Route path="/" element={<HomeSreen/>} />
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path = "*" element = {<NotFound/>}/>
      
      </Routes>
  

  );
}

export default App;
