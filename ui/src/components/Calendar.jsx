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
  });

  return (
    <div className="flex flex-col w-full">
      {Object.keys(groupedData).map((item) => (
        <div key={item}>
          <p className="text-4xl font-bold mt-5 lg:text-left sm:text-center text-center">
            {moment(item, "YYYY-MM").format("MMMM")}
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-1 xl:grid-cols-2 mt-10 mb-5">
            {groupedData[item].map((game, index) => (
              <div key={index} className="flex flex-row hover:cursor-pointer transform transition-transform duration-300 hover:scale-105">
                <div>
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-100 h-80 object-cover rounded-lg rounded-r-none"
                  />
                </div>
                <div className="flex flex-col bg-slate-800 rounded-r w-80 p-10 text-lg">
                  <div className="text-3xl mb-2 font-bold">{game.name}</div>
                  <div>{moment(game.date).format("MMM Do YYYY")}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
