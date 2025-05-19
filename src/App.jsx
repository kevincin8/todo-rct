import Prova from "./components/Prova";
import GiocoCarte from "./components/GiocoCarte"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Prova/>}/>
          <Route path="/gioco" element={<GiocoCarte/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;