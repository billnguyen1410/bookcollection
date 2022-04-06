import React from 'react';
import './App.css';
import UpdatePage from './components/Pages/UpdatePage';
import AddPage from './components/Pages/AddPage';
import MainPage from './components/Pages/MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/addbook" element={<AddPage />} />
          <Route path="/updatebook" element={<UpdatePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
