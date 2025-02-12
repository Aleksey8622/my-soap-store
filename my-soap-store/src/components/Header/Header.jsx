// src/components/Header.jsx
import React, { useState } from "react";
import "./Header.css"; // Путь к стилям
import Search from "../Search/Search"; // Импортируем компонент поиска

function Header({ toggleMenu }) {
  const [isOpen, setIsOpen] = useState(false);

  // Функция для переключения состояния открытия/закрытия меню
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
    toggleMenu(); // вызываем переданную функцию toggleMenu из родительского компонента
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>BLISSOM</h1>
      </div>
      <Search />
      <div className="burger-menu" onClick={handleMenuToggle}>
        <div className="burger-icon"></div>
        <div className="burger-icon"></div>
        <div className="burger-icon"></div>
      </div>

      {/* Сайдбар */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
