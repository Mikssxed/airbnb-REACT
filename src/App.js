import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Card";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header />
      <Cards data={data} />
    </div>
  );
}

export default App;
