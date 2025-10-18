import React, { useState, useEffect, useRef } from "react";
import "./Timer.css";

function TimerFunction() {
    const [seconds, setSeconds] = useState(
        parseInt(localStorage.getItem("timerValue")) || 0
    );
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        console.log(`Updated: ${seconds}`);
        localStorage.setItem("timerValue", seconds);
    }, [seconds]);

    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current);
            console.log("Timer unmounted");
        };
    }, []);

    const startTimer = () => {
        if (!isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
            setIsRunning(true);
        }
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setSeconds(0);
        setIsRunning(false);
        localStorage.setItem("timerValue", 0);
    };

    return (
        <div className="timer">
            <h2 className={isRunning ? "" : "stopped"}>{seconds}s</h2>
            <div className="controls">
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
}

export default TimerFunction;
