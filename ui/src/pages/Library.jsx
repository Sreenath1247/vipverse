import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import useGameStore from "../store/useStore";
import Loader from "../components/Loader";
import axios from "axios";

const Library = () => {
  const { allGames, getAllGames, setAllGames, loading, setLoading } =
    useGameStore();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await getAllGames();
        setLoading(false);
      } catch (error) {
        console.error("Error fetching played games:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNext = async () => {
    try {
      scrollToTop();
      setLoading(true);
      setPage((prevPage) => prevPage + 1);
      const res = await axios.get(allGames?.next, {
        params: { page_size: 40, platforms: 4 },
      });
      setAllGames(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching next page of games:", error);
      setLoading(false);
    }
  };

  const handlePrev = async () => {
    try {
      scrollToTop();
      setLoading(true);
      setPage((prevPage) => prevPage - 1);
      const res = await axios.get(allGames?.previous, {
        params: { page_size: 40, platforms: 4 },
      });
      setAllGames(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching previous page of games:", error);
      setLoading(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional, adds a smooth scrolling animation
    });
  };

  console.log(allGames)

  return (
    <div className="h-full flex flex-col">
      <header className="fixed top-0 left-0 w-full lg:h-28 md:h-15 h-15 z-50 bg-slate-950">
        <div className="max-w-[1920px] mx-auto w-full lg:h-28 md:h-15 h-15">
          <Header />
        </div>
      </header>

      <div className="bg-slate-950 w-full h-full lg:mt-35 mt-20 flex">
        <div className="sm:px-8 lg:px-10 xl:px-13 flex-1">
          <div className="flex lg:flex-row flex-col lg:mb-0 sm:mb-5 mb-5 items-center justify-between">
            <h1 className="text-white md:text-5xl text-3xl font-bold mb-7">All PC Games</h1>
            <div className="flex flex-row">
              {page > 1 && (
                <p
                  className="text-xl text-gray-500 font-bold ml-4 hover:cursor-pointer hover:text-white transition duration-300"
                  onClick={handlePrev}
                >
                  Prev
                </p>
              )}
              <p className="text-xl text-white font-bold ml-4">{page}</p>
              {page < 3 && (
                <p
                  className="text-xl text-gray-500 font-bold ml-4 hover:cursor-pointer hover:text-white transition duration-300"
                  onClick={handleNext}
                >
                  Next
                </p>
              )}
            </div>
          </div>
          <div className="grid h-full w-full justify-center lg:px-0 lg:pb-5 md:px-25 sm:px-12 px-5 pb-5">
            {loading && <Loader />}
            {allGames?.results?.length > 0 && (
              <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
                {allGames?.results?.map((game, index) => (
                  <div
                    key={index}
                    className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-105"
                  >
                    <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg w-full h-[350px]">
                      <img
                        src={game.background_image}
                        alt={game.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h2 className="text-white text-lg font-bold mt-2 text-center">
                      {game.name}
                    </h2>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-row lg:mt-20 mt-30 mb-5 justify-center items-center">
        {page > 1 && (
          <p
            className="text-xl text-gray-500 font-bold ml-4 hover:cursor-pointer hover:text-white transition duration-300"
            onClick={handlePrev}
          >
            Prev
          </p>
        )}
        <p className="text-xl text-white font-bold ml-4">{page}</p>
        {page < 3 && (
          <p
            className="text-xl text-gray-500 font-bold ml-4 hover:cursor-pointer hover:text-white transition duration-300"
            onClick={handleNext}
          >
            Next
          </p>
        )}
      </div>
    </div>
  );
};

export default Library;
