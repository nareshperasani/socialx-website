import React from 'react';
import './App.css';
import Download from './components/download/Download';
import Subscribe from './components/subscribe/Subscribe';
import Faq from './components/faq/Faq';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <main>
      <header className="header-bg">
        <Navbar/>
        <Header/>
      </header>
      <Features/>
      <Download/>
      <Subscribe/>
      <Faq/>
      <Footer/>
    </main>
  )
}

export default App;
