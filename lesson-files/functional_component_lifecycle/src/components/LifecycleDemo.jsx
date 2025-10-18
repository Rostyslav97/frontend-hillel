import React, { useState, useEffect } from 'react';

function LifecycleDemo({ prop }) {
    const [state, setState] = useState(0);

    // Монтування
    useEffect(() => {
        console.log('Компонент змонтовано');

        return () => {
            console.log('Компонент розмонтовано');
        };
    }, []);

    // Оновлення
    useEffect(() => {
        console.log('Стан або пропси змінилися');

        return () => {
            console.log('Очищення після оновлення');
        };
    }, [state, prop]);

    return (
        <div>
            <p>State: {state}</p>
            <button onClick={() => setState(state + 1)}>Змінити стан</button>
        </div>
    );
}

export default LifecycleDemo;