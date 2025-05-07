import React from "react";
import moment from "moment";

const Calendar = ({ list }) => {
  const groupedData = [];

  list?.map((item) => {
    const monthYear = moment(item.date).format("YYYY-MM");
    if (!groupedData[monthYear]) {
      groupedData[monthYear] = [];
    }
    groupedData[monthYear].push(item);
    // console.log(moment(item.date).format("MMM Do YYYY"));
  });

  return (
    <div className="flex flex-col items-center w-full">
      {Object.keys(groupedData).map((item) => (
        <div key={item}>
          <p className="text-4xl font-bold">
            {moment(item, "YYYY-MM").format("MMMM")}
          </p>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-4">
            {groupedData[item].map((game, index) => (
              <div
                key={index}
                className="hover:cursor-pointer transform transition-transform duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-lg w-full h-[350px]">
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
        </div>
      ))}
    </div>
  );
};

export default Calendar;
