import React from "react";
import "./App.css";
import SendButton from "./components/Buttons/SendButton/SendButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SendButton>Send Message</SendButton>
      </header>
    </div>
  );
}

export default App;
