import "./App.css";
import About from "./Components/About";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Me from "./Components/Me/Me";

function App() {
  return (
    <div className="App">
      <Header />
      <Me />
      <Main />
      <About />
    </div>
  );
}

export default App;
