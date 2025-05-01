import axios from "axios";

const key = "f1dfa976cd47419baeb97f2d9f42ec02"; // Replace with your actual API key
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGamesList = async (page) => {
  try {
    const response = await axiosCreate.get("/games", {
      params: {
        key: key,
        page_size:544966,
      },
    });
    return response;
  } catch (error) {
    console.error("Error fetching games list:", error);
    throw error;
  }
}

export default {
    getGamesList,
}