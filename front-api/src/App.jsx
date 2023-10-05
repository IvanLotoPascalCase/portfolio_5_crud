import { Routes, Route } from "react-router-dom";

// DEFAULT VIEW
import Home from "./pages/Home";

// DEVELOPING VIEWS
import Navbar from "./pages/Navbar";
import Ofertas from "./components/bigComps/Ofertas";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ivan" element={<Ofertas />} />
        <Route path="/nav-dev" element={<Navbar />} />
      </Routes>
    </>
  );
}

export default App;
