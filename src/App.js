import logo from "./logo.svg";
import "./App.css";
import Headerone from "./components/Headerone/Headerone";
import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import { Routes, Route, } from "react-router-dom";
import ProjectHeader from "./components/ProjectHeader/ProjectHeader";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";
// import About from "./components/About/About";
import AboutHeader from "./components/AboutHeader/AboutHeader";
 

function App() {
  return (
    <div className=" ">
      {/* <Headerone></Headerone> */}
      <Header></Header>

      
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services/>} /> 
        <Route path="/projects" element={<ProjectHeader />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/about" element={<AboutHeader />} /> 
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
