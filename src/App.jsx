import react from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Listings from './components/Listings';
import Content from './components/Content';
import Quality from './components/Quality';


function App() {
 
  return (
    <div>
      <Navbar />
      <Hero />
      <Listings />
      <Content />
      < Quality />
    </div>
  )
}

export default App
