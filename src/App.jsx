import Navbar from "./Componants/Navbar";
import Footer from "./Componants/Footer";
import Home from "./Componants/Home";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import CardDetails from "./Componants/CardDetails";
import About from "./Componants/About";
import Contact from "./Componants/Contact";


function App() {
  return (
    <>
      
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cardInfo" element={<CardDetails/>}/>
        <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
