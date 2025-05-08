import axios from "axios";

const axiosCreate = axios.create({
  baseURL: "http://localhost:3000/api",
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
    const response = await axiosCreate.get(`/gamelist/images`);
    return response;
  } catch (error) {
    console.error("Error fetching game images:", error);
    throw error;
  }
};
const getGamesList = async () => {
  try {
    const response = await axiosCreate.get("/gamelist");
    return response;
  } catch (error) {
    console.error("Error fetching games list:", error);
    throw error;
  }
};
const searchGames = async (query) => {
  try {
    const response = await axiosCreate.get("/search", {
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
    const response = await axiosCreate.get("/upcoming");
    return response;
  } catch (error) {
    console.error("Error fetching games list:", error);
    throw error;
  }
};

const getPlaylists = async () => {
  try {
    const response = await axiosCreate.get("/playlists");
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
