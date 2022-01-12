import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Detail from "./components/pages/Detail";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
