import React, { useEffect, useState } from 'react'
import GlobalService from '../services/GlobalService'
import GameList from '../components/GameList';

const PlayedGames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await GlobalService.getGamesList();
        setGames(response.data.results);
      } catch (error) {
        console.error("Error fetching played games:", error);
      }
    };
    
    fetchData();
  }, []);
    
  return (
    <div className='grid h-full w-full'>
      {games?.length > 0 && <GameList gameList={games}/>}
    </div>
  )
}

export default PlayedGames