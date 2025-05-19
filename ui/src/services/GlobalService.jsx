import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL

const axiosCreate = axios.create({
  baseURL: apiUrl,
});

const axiosRawg = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f1dfa976cd47419baeb97f2d9f42ec02",
  },
});

//RAWG calls
const getAllGames = async (page) => {
  try {
    const response = await axiosRawg.get("/games", {
      params: { page, page_size: 40, platforms: 4 },
    });
    return response;
  } catch (error) {
    console.error("Error fetching all games:", error);
    throw error;
  }
};
const searchAllGames = async (searchText) => {
  try {
    const response = await axiosRawg.get("/games", {
      params: { platforms: 4, search: searchText },
    });
    return response;
  } catch (error) {
    console.error("Error fetching all games:", error);
    throw error;
  }
};

//Supabase calls
const getGameImages = async () => {
  try {
    const response = await axiosCreate.get(`/games/images`);
    return response;
  } catch (error) {
    console.error("Error fetching game images:", error);
    throw error;
  }
};
const getGamesList = async () => {
  try {
    const response = await axiosCreate.get("/games/list");
    return response;
  } catch (error) {
    console.error("Error fetching games list:", error);
    throw error;
  }
};
const searchGames = async (query) => {
  try {
    const response = await axiosCreate.get("/games/search", {
      params: { searchTerm: query },
    });
    return response;
  } catch (error) {
    console.error("Error searching games:", error);
    throw error;
  }
};
const getUpcomingGames = async () => {
  try {
    const response = await axiosCreate.get("/games/upcoming");
    return response;
  } catch (error) {
    console.error("Error fetching games list:", error);
    throw error;
  }
};

const getPlaylists = async () => {
  try {
    const response = await axiosCreate.get("/games/playlists");
    return response;
  } catch (error) {
    console.error("Error fetching games list:", error);
    throw error;
  }
};

export default {
  getAllGames,
  searchAllGames,
  getGameImages,
  getGamesList,
  searchGames,
  getUpcomingGames,
  getPlaylists
};
