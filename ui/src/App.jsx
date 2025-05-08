import React from "react";
import Layout from "./pages/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlayedGames from "./pages/PlayedGames";
import Upcoming from "./pages/Upcoming";
import Playlist from "./pages/Playlist";
import Allgames from "./pages/Allgames";
import About from "./pages/About";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/playedgames" element={<PlayedGames />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/playlists" element={<Playlist />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/allgames" element={<Allgames />} />
      </Routes>
    </Router>
  );
};

export default App;
