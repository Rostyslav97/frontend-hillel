import React, { useContext } from 'react';

export const ThemeContext = React.createContext('light'); // Експорт контексту

function ThemedButton() {
    const theme = useContext(ThemeContext); // Використання контексту

    return (
        <button
            style={{
                background: theme === 'light' ? '#fdfdfd' : '#7a1313',
                color: theme === 'light' ? '#000' : '#fff',
                border: '1px solid',
                padding: '10px 20px',
                margin: '10px',
                cursor: 'pointer',
            }}
        >
            Themed Button
        </button>
    );
}

export default ThemedButton;