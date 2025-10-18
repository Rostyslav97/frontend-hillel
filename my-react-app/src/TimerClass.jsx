import React, { Component } from "react";
import "./Timer.css";

class TimerClass extends Component {
    constructor(props) {
        super(props);
        const savedTime = parseInt(localStorage.getItem("timerValue")) || 0;
        this.state = {
            seconds: savedTime,
            isRunning: false,
        };
        this.interval = null;
    }

    componentDidMount() {
        console.log("Timer mounted");
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.seconds !== this.state.seconds) {
            console.log(`Updated: ${this.state.seconds}`);
            localStorage.setItem("timerValue", this.state.seconds);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log("Timer unmounted");
    }

    startTimer = () => {
        if (!this.state.isRunning) {
            this.interval = setInterval(() => {
                this.setState((prevState) => ({
                    seconds: prevState.seconds + 1,
                }));
            }, 1000);
            this.setState({ isRunning: true });
        }
    };

    stopTimer = () => {
        clearInterval(this.interval);
        this.setState({ isRunning: false });
    };

    resetTimer = () => {
        clearInterval(this.interval);
        this.setState({ seconds: 0, isRunning: false });
        localStorage.setItem("timerValue", 0);
    };

    render() {
        return (
            <div className="timer">
                <h2 className={this.state.isRunning ? "" : "stopped"}>
                    {this.state.seconds}s
                </h2>
                <div className="controls">
                    <button onClick={this.startTimer}>Start</button>
                    <button onClick={this.stopTimer}>Stop</button>
                    <button onClick={this.resetTimer}>Reset</button>
                </div>
            </div>
        );
    }
}

export default TimerClass;
