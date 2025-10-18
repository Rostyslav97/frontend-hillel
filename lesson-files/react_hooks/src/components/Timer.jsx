import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval); // Очищення інтервалу
    }, []); // Викликається один раз після монтування

    return <p>Time: {seconds}s</p>;
}

export default Timer;