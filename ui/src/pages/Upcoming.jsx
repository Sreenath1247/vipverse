import React, { useEffect } from "react";
import useGameStore from "../store/useStore";
import Loader from "../components/Loader";
import Calendar from "../components/Calendar";

const Upcoming = () => {
  const { upcomingList, getUpcomingGames, loading, setLoading } =
    useGameStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await getUpcomingGames();
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
      <p className="text-white lg:text-5xl text-4xl font-extrabold tracking-[0.1em] mb-5 lg:text-left sm:text-center text-center">
        Upcoming releases - 2025
      </p>
      {upcomingList?.length > 0 && <Calendar list={upcomingList} />}
    </div>
  );
};

export default Upcoming;
