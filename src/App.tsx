import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/header";
import { Profile } from "./components/profile/profile";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
    </div>
  );
}

export default App;
