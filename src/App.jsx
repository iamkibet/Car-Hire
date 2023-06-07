import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Listings from "./components/Listings/Listings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Listings" element={<Listings />} />
      </Routes>
    </Router>
  );
}

export default App;
