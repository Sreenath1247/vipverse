import React, { useEffect } from "react";
import useGameStore from "../store/useStore";
import AutoSlide from "../components/AutoSlide";

const Home = () => {
  const { gameImages, getGameImages } = useGameStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await getGameImages();
      } catch (error) {
        console.error("Error fetching played games:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p className="text-white text-6xl font-extrabold tracking-[0.1em] mb-5">New and trending</p>
      <AutoSlide images={gameImages} interval={5000}/>
    </div>
  );
};

export default Home;
