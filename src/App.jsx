import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Listings from "./components/Listings/Listings";
import Contacts from "./components/Contacts/Contacts";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Listings" element={<Listings />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Landing" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
