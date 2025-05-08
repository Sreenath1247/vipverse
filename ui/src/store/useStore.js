import { create } from "zustand";
import GlobalService from "../services/GlobalService";

const useGameStore = create((set) => ({
  gameList: [],
  gameImages: [],
  allGames: [],
  upcomingList: [],
  playlists: [],
  loading: false,
  setLoading: (loading) => set({ loading }),
  getAllGames: async (page) => {
    const response = await GlobalService.getAllGames(page);
    set({ allGames: response.data });
  },
  setAllGames: (allGames) => set({ allGames }),
  searchAllGames: async (page, searchText) => {
    const response = await GlobalService.searchAllGames(page, searchText);
    set({ allGames: response.data });
  },
  getGameImages: async () => {
    const response = await GlobalService.getGameImages();
    set({ gameImages: response.data });
  },
  getGameList: async () => {
    const response = await GlobalService.getGamesList();
    set({ gameList: response.data });
  },
  searchGames: async (query) => {
    const response = await GlobalService.searchGames(query);
    set({ gameList: response.data });
  },
  getUpcomingGames: async () => {
    const response = await GlobalService.getUpcomingGames();
    set({ upcomingList: response.data });
  },
  getPlaylists: async () => {
    const response = await GlobalService.getPlaylists();
    set({ playlists: response.data });
  },
}));

export default useGameStore;
