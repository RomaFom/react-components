import React from "react";
import "./App.css";
import DeleteButton from "./components/Buttons/DeleteButton/DeleteButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DeleteButton>Delete User</DeleteButton>
      </header>
    </div>
  );
}

export default App;
