import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Listings from "./components/Listings/Listings";
import Contacts from "./components/Contacts/Contacts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Listings" element={<Listings />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </Router>
  );
}

export default App;
