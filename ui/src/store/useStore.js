import { create } from "zustand";
import GlobalService from "../services/GlobalService";

const useGameStore = create((set) => ({
  gameList: [],
  getGameList: async () => {
    const response = await GlobalService.getGamesList();
    set({ gameList: response.data });
  },
  searchGames: async (query) => {
    const response = await GlobalService.searchGames(query);
    set({ gameList: response.data });
  },
}));

export default useGameStore;
