import { useState } from "react";

export default function useWeather() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeather = async (city) => {
        setLoading(true);
        setError(null);
        setWeather(null);

        try {
            const geoRes = await fetch(
                `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
                    city
                )}&count=1&language=uk`
            );
            const geoData = await geoRes.json();

            if (!geoData.results || geoData.results.length === 0) {
                throw new Error("Місто не знайдено");
            }

            const { latitude, longitude, name, country } = geoData.results[0];
            const weatherRes = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`
            );
            const data = await weatherRes.json();

            setWeather({
                city: name,
                country,
                temperature: data.current_weather.temperature,
                wind: data.current_weather.windspeed,
                description: getWeatherDescription(data.current_weather.weathercode),
                condition:
                    data.current_weather.temperature > 20
                        ? "sunny"
                        : data.current_weather.temperature < 0
                            ? "snow"
                            : "cloudy",
                forecast: data.daily.time.slice(0, 3).map((date, i) => ({
                    date,
                    min: data.daily.temperature_2m_min[i],
                    max: data.daily.temperature_2m_max[i],
                })),
            });
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const getWeatherDescription = (code) => {
        const map = {
            0: "ясно",
            1: "переважно ясно",
            2: "частково хмарно",
            3: "похмуро",
            45: "туман",
            48: "паморозь",
            51: "легкий дощ",
            61: "дощ",
            71: "сніг",
            80: "зливи",
        };
        return map[code] || "невідомо";
    };

    return { weather, loading, error, fetchWeather };
}
