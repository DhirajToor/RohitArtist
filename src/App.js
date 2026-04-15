import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToSection from "./ScrollToSection";
import Footer  from "./components/Footer";

import Home from "./sections/Home";
import Bio from "./sections/Bio"; 
import Merch from "./sections/Merch"; 
import Shows from "./sections/Shows";
import Contact from "./sections/Contact";


function App() {
  return (
    <Router>   
      <Navbar />
      <ScrollToSection />

      {/* Sections */}
      <Home />
      <Bio />
      <Shows />
      {/* <Media />
      <Photos /> */}
      
      
      <Merch />
      <Contact />

      {/* Routes */}
      <Routes>
        <Route path="/" element={null} />
        <Route path="/bio" element={null} />
        {/* <Route path="/media" element={null} />
        <Route path="/photos" element={null} /> */}
        <Route path="/shows" element={null} />
        
        <Route path="/merch" element={null} />
        <Route path="/contact" element={null} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;