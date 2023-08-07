import React from "react";
import "./App.css";
import logo from "./img/logo.png"
import Garagem from "./components/Garagem";
import Header from "./components/Header";
import RedesSociais from "./components/Redes-Sociais";
import CopyWrite from "./components/Copywrite";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <h1>Aula - Componentes React</h1>
      <Garagem/>
      <RedesSociais></RedesSociais>
      <CopyWrite></CopyWrite>
      <Footer></Footer>
    
    </div>
  );
}
