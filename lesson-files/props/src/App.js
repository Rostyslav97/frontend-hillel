import HelloMessage from "./components/HelloMessage";
import Alert from "./components/Alert";
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <HelloMessage name="Vladimir Shaitan" />
      <Alert name='Some name' type='Some type' quantity={100} />
    </div>
  );
}

export default App;
