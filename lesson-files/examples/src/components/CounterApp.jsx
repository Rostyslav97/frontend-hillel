import React, { useState, useEffect } from 'react';

function CounterApp() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log(`Кількість змінена: ${count}`);
        return () => console.log('Очищення попереднього ефекту');
    }, [count]); // Виконується при зміні count

    useEffect(() => {
        console.log(name)
    }, [name]);

    return (
        <div>
            <h1>Hello, {name || 'Guest'}!</h1>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default CounterApp;