import * as gameService from "../services/gameService.js";

export const getGameList = async (req, res) => {
  try {
    const { gameList } = await gameService.getGameList(req, res);
    return gameList;
  } catch (error) {
    console.error("Error fetching game list:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const searchGame = async (req, res, searchTerm) => {
    try {
        const { gameList } = await gameService.searchGame(req, res, searchTerm);
        return gameList;
    } catch (error) {
        console.error("Error searching game:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
