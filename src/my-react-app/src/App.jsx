import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

    return (
        <div className="App">
            <h1>Hello, React + Vite!</h1>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

export default App
