import React from "react";

const GameList = ({ gameList }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-6">
      {gameList.map((game, index) => (
        <div key={index} className="hover:cursor-pointer">
          <div
            className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg w-full h-[350px] hover:brightness-110 transition duration-300"
          >
            <img
              src={game.image}
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
  );
};

export default GameList;