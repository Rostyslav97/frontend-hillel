import React from "react";

export default function FavoritesList({ favorites, onSelect, onRemove }) {
    if (favorites.length === 0) return null;

    return (
        <div className="favorites">
            <h3>Обрані міста</h3>
            <ul>
                {favorites.map((f) => (
                    <li key={f.name}>
                        <span onClick={() => onSelect(f.name)}>{f.name}</span>
                        <button onClick={() => onRemove(f.name)}>×</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
