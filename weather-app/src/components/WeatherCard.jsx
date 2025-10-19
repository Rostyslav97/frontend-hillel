import React from "react";

export default function WeatherCard({
                                        weather,
                                        onAddFavorite,
                                        onRemoveFavorite,
                                        isFavorite,
                                    }) {
    return (
        <div className="weather-card">
            <h2>
                {weather.city}, {weather.country}
            </h2>
            <p>
                🌡 Температура: {weather.temperature}°C <br />
                💨 Вітер: {weather.wind} км/год <br />
                ☁️ Опис: {weather.description}
            </p>

            <h3>Прогноз на 3 дні</h3>
            <ul>
                {weather.forecast.map((day, idx) => (
                    <li key={idx}>
                        {day.date}: {day.min}°C / {day.max}°C
                    </li>
                ))}
            </ul>

            {isFavorite ? (
                <button onClick={onRemoveFavorite}>Видалити з обраних</button>
            ) : (
                <button onClick={onAddFavorite}>Додати в обрані</button>
            )}
        </div>
    );
}
