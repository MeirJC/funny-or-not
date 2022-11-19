import logo from "./logo.svg";
import "./App.css";
import Gallery from "./components/Gallery";
import { useState } from "react";
// ==================================================================
function App() {
  const imgArr = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
  ];
  // const [image, Setimage] = useState["./1.jpg"];
  const [yes, setYes] = useState("0");
  const [no, setNo] = useState("0");
  return (
    <div className="App">
      <header className="App-header">
        <Gallery yes={yes} no={no} setYes={setYes} setNo={setNo} />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
