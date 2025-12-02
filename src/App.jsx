// App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home"
import AddPlayer from "./pages/AddPlayer/AddPlayer";
import styles from "./App.module.css";
import PlayerInfo from "./pages/PlayerInfo/PlayerInfo";
import NavBar from "./components/NavBar/NavBar";

export default function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/addplayer" element={<AddPlayer />} />
        <Route path="/playerinfo/:username" element={<PlayerInfo />}
        />
      </Routes>
    </Router>
  );
}
