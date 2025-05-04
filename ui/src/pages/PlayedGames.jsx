import React, { use, useEffect, useState } from "react";
import GameList from "./GameList";
import useGameStore from "../store/useStore";
import Loader from "../components/Loader";

const PlayedGames = () => {
  const { gameList, getGameList } = useGameStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await getGameList();
        setLoading(false);
      } catch (error) {
        console.error("Error fetching played games:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid h-full w-full justify-center lg:p-0 md:px-25 sm:px-12 px-5 pb-5">
      {loading && <Loader />}
      {gameList?.length > 0 && <GameList gameList={gameList} />}
    </div>
  );
};

export default PlayedGames;
