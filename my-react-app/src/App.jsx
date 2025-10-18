import React, { useState } from "react";
import TimerClass from "./TimerClass.jsx";
import TimerFunction from "./TimerFunction.jsx";

function App() {
    const [showClassTimer, setShowClassTimer] = useState(true);
    const [showFuncTimer, setShowFuncTimer] = useState(true);

    return (
        <div className="App">
            <h1>React Timer</h1>
            <h2>Class Component</h2>
            {showClassTimer ? <TimerClass /> : <p>TimerClass unmounted</p>}
            <button onClick={() => setShowClassTimer(!showClassTimer)}>
                {showClassTimer ? "Unmount Timer" : "Mount Timer"}
            </button>

            <hr />

            <h2>Functional Component</h2>
            {showFuncTimer ? <TimerFunction /> : <p>TimerFunction unmounted</p>}
            <button onClick={() => setShowFuncTimer(!showFuncTimer)}>
                {showFuncTimer ? "Unmount Timer" : "Mount Timer"}
            </button>
        </div>
    );
}

export default App;