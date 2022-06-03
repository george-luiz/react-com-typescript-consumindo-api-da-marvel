import './App.css'
import { Footer } from "./components/Footer/Footer";
import { Header } from './components/Header/Header';
import { BoxCorpo } from "./style";
import Router from './components/routes/routes';
import { useState } from 'react';

function App() {


  return (
    <BoxCorpo>
      <Header />
      <Router />
      <Footer />
    </BoxCorpo>
  )
}

export default App
