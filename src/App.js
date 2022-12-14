import Nav from "./Components/nav";
import Heading from "./Components/heading";
import Info from "./Components/info";
import Timer from "./Components/timer";
import Team from "./Components/team";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Heading />
        <Info />
        <Timer />
        <Team />
      </header>
    </div>
  );
}

export default App;
