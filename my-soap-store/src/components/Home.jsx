import React, { useState } from 'react';
import './Home.css';  // Не забудьте добавить стили для компонента

// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для бокового меню

  // Функция для переключения состояния меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} />
      <Sidebar isOpen={isMenuOpen} />
      <main>
        <h2>Welcome to My Website</h2>
        <p>This is your content.</p>
      </main>
    </div>
  );
}

export default App;

