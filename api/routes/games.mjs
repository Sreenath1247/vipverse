import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/images", async (req, res) => {
  try {
    const collection = await db.collection("game-images");
    const gameimages = await collection.find().toArray();
    res.send(gameimages).status(200);
  } catch (error) {
    console.error("Error fetching game images:", error.message);
    res.status(500).json({ error: "Error fetching game images" });
  }
});

router.get("/list", async (req, res) => {
  try {
    const collection = await db.collection("game-list");
    const gameimages = await collection.find().toArray();
    res.send(gameimages).status(200);
  } catch (error) {
    console.error("Error fetching game list:", error.message);
    res.status(500).json({ error: "Error fetching game list" });
  }
});

router.get("/search", async (req, res) => {
  try {
    const { searchTerm } = req.query;
    const collection = await db.collection("game-list");
    const query = [
      {
        $search: {
          index: "default",
          autocomplete: {
            query: searchTerm,
            path: "name",
          },
        },
      },
    ];
    const gameimages = await collection.aggregate(query).toArray();
    res.send(gameimages).status(200);
  } catch (error) {
    console.error("Error fetching game list:", error.message);
    res.status(500).json({ error: "Error fetching game list" });
  }
});

router.get("/upcoming", async (req, res) => {
  try {
    const collection = await db.collection("upcoming");
    const gameimages = await collection.find().toArray();
    res.send(gameimages).status(200);
  } catch (error) {
    console.error("Error fetching upcoming game list:", error.message);
    res.status(500).json({ error: "Error fetching upcoming game list" });
  }
});

router.get("/playlists", async (req, res) => {
  try {
    const collection = await db.collection("playlists");
    const gameimages = await collection.find().toArray();
    res.send(gameimages).status(200);
  } catch (error) {
    console.error("Error fetching playlists:", error.message);
    res.status(500).json({ error: "Error fetching playlists" });
  }
});

export default router;
