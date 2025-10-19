import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import FavoritesList from "./components/FavoritesList";
import useWeather from "./hooks/useWeather";
import "./styles.css";

export default function App() {
    const [query, setQuery] = useState("");
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem("favorites")) || []
    );

    const { weather, loading, error, fetchWeather } = useWeather();

    const handleSearch = () => {
        if (query.trim()) fetchWeather(query);
    };

    const handleAddFavorite = () => {
        if (!weather) return;
        const newFav = { name: weather.city, country: weather.country };
        if (!favorites.find((f) => f.name === newFav.name)) {
            const updated = [...favorites, newFav];
            setFavorites(updated);
            localStorage.setItem("favorites", JSON.stringify(updated));
        }
    };

    const handleRemoveFavorite = (cityName) => {
        const updated = favorites.filter((f) => f.name !== cityName);
        setFavorites(updated);
        localStorage.setItem("favorites", JSON.stringify(updated));
    };

    const handleSelectFavorite = (cityName) => {
        fetchWeather(cityName);
    };

    return (
        <div className="app" data-bg={weather?.condition}>
            <h1>Погода</h1>
            <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

            <FavoritesList
                favorites={favorites}
                onSelect={handleSelectFavorite}
                onRemove={handleRemoveFavorite}
            />

            {loading && <p>Завантаження...</p>}
            {error && <p className="error">{error}</p>}

            {weather && (
                <WeatherCard
                    weather={weather}
                    onAddFavorite={handleAddFavorite}
                    onRemoveFavorite={() => handleRemoveFavorite(weather.city)}
                    isFavorite={favorites.some((f) => f.name === weather.city)}
                />
            )}
        </div>
    );
}
