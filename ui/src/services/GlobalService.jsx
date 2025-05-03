import axios from "axios";

const key = "f1dfa976cd47419baeb97f2d9f42ec02"; // Replace with your actual API key
const axiosCreate = axios.create({
  baseURL: "http://localhost:3000/api",
});

const getGamesList = async (page) => {
  try {
    const response = await axiosCreate.get("/gamelist");
    return response;
  } catch (error) {
    console.error("Error fetching games list:", error);
    throw error;
  }
}

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
}

export default {
    getGamesList,
    searchGames
}