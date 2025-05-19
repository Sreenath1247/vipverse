import Layout from "./pages/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import CompletedGames from "./pages/CompletedGames";
import CurrentGames from "./pages/CurrentGames";
import Upcoming from "./pages/Upcoming";
import Playlist from "./pages/Playlist";
import Allgames from "./pages/Allgames";
import About from "./pages/About";
import PlayedGames from "./pages/PlayedGames";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="library" element={<Library />}>
            <Route index element={<Navigate to="currentlyplaying" replace />} />
            <Route path="currentlyplaying" element={<CurrentGames />} />
            <Route path="completed" element={<CompletedGames />} />
            <Route path="played" element={<PlayedGames />} />
          </Route>
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="playlists" element={<Playlist />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="allgames" element={<Allgames />} />
      </Routes>
    </Router>
  );
};

export default App;
