import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroHeader from "./Components/HeroHeader";
import About from "./Pages/About";
import Hobbies from "./Pages/Hobbies";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroHeader />} />
          <Route path="/about" element={<About />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <HeroHeader />
    </div>
  );
}

export default App;
