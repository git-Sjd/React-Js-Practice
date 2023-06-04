
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode, setMode] = useState("light")
  return (
    <>
      <Navbar title="TextUtils" home="Home" mode={mode} />
      <div className="container">
        <TextForm heading="Please Enter your text in below box" />
      </div>
      <About />

    </>
  );
}

export default App;
