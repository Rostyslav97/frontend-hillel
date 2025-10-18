import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    // ComponentDidMount
    useEffect(() => {

    }, []);

    // ComponentDidMount, ComponentDidUpdate
    useEffect(() => {

    });


    // ComponentDidUpdate only for seconds change not minutes and not for first render
    useEffect(() => {
            // call useEffect callback when seconds change
    }, [seconds]);

    // ComponentDidUpdate only for seconds and minutes change not for first render
    useEffect(() => {
            // call useEffect callback when seconds and minutes change
    }, [seconds, minutes]);


    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        // componentWillUnmount
        return () => clearInterval(interval); // Очищення інтервалу при розмонтуванні
    }, []); // Виконати тільки один раз після монтування



    return <p>Time: {seconds} seconds</p>;
}

export default Timer;