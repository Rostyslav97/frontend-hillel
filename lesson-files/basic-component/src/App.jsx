import Hello from './components/Hello'
import FuncComponent from './components/FuncComponent'

function App() {
  return (
    <div className="App">
      <Hello />
      <FuncComponent name={'World'} />
    </div>
  );
}

export default App;
