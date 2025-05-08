import React, { useEffect } from "react";
import useGameStore from "../store/useStore";
import Loader from "../components/Loader";

const Playlist = () => {
  const { playlists, getPlaylists, loading, setLoading } = useGameStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await getPlaylists();
        setLoading(false);
      } catch (error) {
        console.error("Error fetching played games:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="lg:px-0 md:px-25 sm:px-12 px-5 mb-5 text-white">
      {loading && <Loader />}
      {playlists?.length > 0 &&
        playlists?.map((game, index) => (
          <div key={index} className="mb-10">
            <p className="text-white text-3xl font-bold tracking-[0.1em] mb-5 lg:text-left sm:text-center text-center">
              {game.name}
            </p>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-7">
              {game.playlists.map((item, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col justify-center rounded-lg shadow-lg w-full h-30 group-hover:cursor-pointer group-hover:brightness-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="hidden group-hover:block group-hover:cursor-pointer absolute top-[50%] left-[30%]">
                      <button className="text-white">Play all</button>
                    </div>
                  </div>
                  <h2 className="text-white text-sm font-bold mt-2 text-left w-full group-hover:cursor-pointer">
                    {item.name}
                  </h2>
                  <h2 className="text-gray-500 text-sm font-medium mt-1 group-hover:cursor-pointer group-hover:none hover:text-white transition duration-500">
                    View full playlist
                  </h2>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Playlist;
