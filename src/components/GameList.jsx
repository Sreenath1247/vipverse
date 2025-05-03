import React from "react";

const GameList = ({ gameList }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-2">
      {gameList.map((game, index) => (
        <div key={index} className="hover:cursor-pointer ">
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg w-[250px] h-[350px] hover:brightness-120 transition duration-300"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <h2 className="text-white text-lg font-bold mt-2">{game.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default GameList;
