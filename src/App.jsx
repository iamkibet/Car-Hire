import react from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Listings from './components/Listings';
import Content from './components/Content';


function App() {
 
  return (
    <div>
      <Navbar />
      <Hero />
      <Listings />
      <Content />
    </div>
  )
}

export default App
