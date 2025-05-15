import React, { useEffect } from "react";
import useGameStore from "../store/useStore";
import Loader from "../components/Loader";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

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
      <p className="text-white lg:hidden text-3xl font-extrabold tracking-[0.1em] mb-5 text-center">
        Playlists
      </p>
      {playlists?.length > 0 &&
        playlists?.map((game, index) => (
          <div key={index} className="mb-10">
            <p className="text-white text-3xl font-bold tracking-[0.1em] mb-5 text-left">
              {game.name}
            </p>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
              {game.playlists.map((item, index) => (
                <div key={index} className="group relative">
                  <a href={item.watchUrl} target="_blank">
                    <div className="flex flex-col justify-center rounded-lg shadow-lg w-full h-30 group-hover:cursor-pointer group-hover:brightness-50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="hidden group-hover:block group-hover:cursor-pointer absolute top-[30%] left-[30%]">
                      <PlayArrowIcon className="mr-1" />
                      <button className="group-hover:cursor-pointer">
                        Play all
                      </button>
                    </div>
                    <h2 className="text-white text-sm font-bold mt-2 text-left w-full group-hover:cursor-pointer">
                      {item.name}
                    </h2>
                  </a>
                  <a href={item.listUrl} target="_blank">
                    <h2 className="text-gray-500 text-sm font-medium mt-1 group-hover:cursor-pointer group-hover:none hover:text-white transition duration-500">
                      View full playlist
                    </h2>
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Playlist;
