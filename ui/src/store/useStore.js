import { create } from "zustand";
import GlobalService from "../services/GlobalService";

const useGameStore = create((set) => ({
  gameList: [],
  allGames: [],
  platforms: [],
  loading: false,
  setLoading: (loading) => set({ loading }),
  getPlatforms: async () => {
    const response = await GlobalService.getPlatforms();
    set({ platforms: response.data });
  },
  getAllGames: async (page) => {
    const response = await GlobalService.getAllGames(page);
    set({ allGames: response.data });
  },
  setAllGames: (allGames) => set({ allGames }),
  searchAllGames: async (page, searchText) => {
    const response = await GlobalService.searchAllGames(page, searchText);
    set({ allGames: response.data.results });
  },
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
