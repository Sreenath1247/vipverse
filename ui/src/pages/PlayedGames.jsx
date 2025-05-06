import React, { use, useEffect, useState } from "react";
import GameList from "./GameList";
import useGameStore from "../store/useStore";
import Loader from "../components/Loader";

const PlayedGames = () => {
  const { gameList, getGameList, loading, setLoading  } = useGameStore();

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
    <div className="grid h-full w-full justify-center lg:px-0 lg:pb-5 md:px-25 sm:px-12 px-5 pb-5">
      {loading && <Loader />}
      <p className="text-white lg:hidden text-4xl font-extrabold tracking-[0.1em] mb-5 text-center">Played Games</p>
      {gameList?.length > 0 && <GameList gameList={gameList} />}
    </div>
  );
};

export default PlayedGames;
