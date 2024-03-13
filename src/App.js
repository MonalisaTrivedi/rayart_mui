import  Menu from "./Pages/Menu";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Calligraphy from "./Pages/Calligraphy";

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Menu" element={<Menu/>}/>
    <Route path="/Calligraphy" element={<Calligraphy/>}/>
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
