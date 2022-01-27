import "./App.css";
import MyTime from "./Components/MyTime";
import OtherTime from "./Components/OtherTime";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <MyTime />
      <OtherTime />
    </div>
  );
}

export default App;
