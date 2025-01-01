import './App.css';
import ClassCompEg from "./Components/ClassComponents/ClassCompEg";
import Home from "./Components/FunctionalComponents/Home";
import About from "./Components/FunctionalComponents/About";
import Contact from "./Components/FunctionalComponents/Contact";
import GAllery from './Components/FunctionalComponents/GAllery';
import UseEffect from './Components/FunctionalComponents/UseEffect';
import UseRef from './Components/FunctionalComponents/UseRef';
import UseContext from './Components/FunctionalComponents/UseContext';
import NavBar from "./Components/FunctionalComponents/NavBar";
import "./assets/css/Home.css";
import "./assets/css/NavBar.css";
import "./assets/css/Contact.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <About college="Kongu" clg1="naturopathy" />} />
        <Route path="/gallery" element={<GAllery />} />
        <Route path="/useeffect" element={<UseEffect />} />
        <Route path="/useref" element={<UseRef />} />
        <Route path="/usecontext" element={<UseContext />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;