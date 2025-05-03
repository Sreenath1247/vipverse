import express from "express";
import { getGameList, searchGame } from "../controllers/gameController.js";

const router = express.Router();

router.get("/gamelist", getGameList);
router.get("/search", (req, res) => {
  const { searchTerm } = req.query;
  if (!searchTerm) {
    return res.status(400).json({ error: "Search term is required" });
  }
  searchGame(req, res, searchTerm);
});

export default router;
