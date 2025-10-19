import React from "react";

export default function SearchBar({ query, setQuery, onSearch }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Введіть місто..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && onSearch()}
            />
            <button onClick={onSearch}>Пошук</button>
        </div>
    );
}
