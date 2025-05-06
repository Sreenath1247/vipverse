import React, { useEffect } from "react";
import useGameStore from "../store/useStore";
import AutoSlide from "../components/AutoSlide";
import Loader from "../components/Loader";

const Home = () => {
  const { gameImages, getGameImages, loading, setLoading } = useGameStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await getGameImages();
        setLoading(false);
      } catch (error) {
        console.error("Error fetching played games:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="lg:px-0 md:px-25 sm:px-12 px-5 mb-5">
       {loading && <Loader />}
      <p className="text-white lg:text-5xl text-4xl font-extrabold tracking-[0.1em] mb-5 lg:text-left sm:text-center text-center">New and trending</p>
      {gameImages?.length > 0 && <AutoSlide images={gameImages} interval={5000}/>}
    </div>
  );
};

export default Home;
