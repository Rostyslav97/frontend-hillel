import Hello from './components/Hello'
import FuncComponent from './components/FuncComponent'

function App() {
  return (
    <div className="App">
      <Hello />
      <FuncComponent name={100} />
    </div>
  );
}

export default App;
