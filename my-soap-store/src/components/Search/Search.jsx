// src/components/Search/Search.jsx
import React, { useState } from "react";
import "./Search.css"; // Путь к стилям

function Search() {
  const [query, setQuery] = useState("");

  // Функция для обработки ввода в поле
  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  // Функция для обработки отправки формы
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    alert(`Поиск по запросу: ${query}`);
  };

  return (
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Поиск..."
          value={query}
          onChange={handleSearchChange}
        />
        <button
          onMouseDown={(e) => e.preventDefault()}
          type="submit"
          className="search-button"
        >
          <svg className="icon" width="24" height="24">
            <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
          </svg>
        </button>
      </div>
    </form>
  );
}

export default Search;
