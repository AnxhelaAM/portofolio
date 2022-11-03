import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import "./App.scss"
import {useState } from "react";


function App(){
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="container">
        <Intro/>
        <Projects />
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;