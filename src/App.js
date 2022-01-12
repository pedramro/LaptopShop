import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Detail from "./components/pages/Detail";
import Home from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/detail/:id' element={<Detail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
