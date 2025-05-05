import React from "react";
import Layout from "./pages/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PlayedGames from "./pages/PlayedGames";
import Upcoming from "./pages/Upcoming";
import Walkthroughs from "./pages/Walkthroughs";
import Library from "./pages/Library";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/playedgames" element={<PlayedGames />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/walkthroughs" element={<Walkthroughs />} />
        </Route>
        <Route path="/library" element={<Library />} />
      </Routes>
    </div>
  );
};

export default App;
