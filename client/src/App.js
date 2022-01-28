import "./App.css";
import MyTime from "./Components/MyTime/MyTime";
import OtherTime from "./Components/OtherTime/OtherTime";
import Header from "./Components/Header/Header";
import Video from "./Components/Video";

function App() {
  return (
    <div className="App">
      <Header />
      <MyTime />
      <Video />
      <OtherTime />
    </div>
  );
}

export default App;
