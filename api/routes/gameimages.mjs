import express from "express";
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const collection = await db.collection("game-images");
    const gameimages = await collection.find().toArray();
    res.send(gameimages).status(200);
  } catch (error) {
    console.error("Error fetching game images:", error.message);
    res.status(500).json({ error: "Error fetching game images" });
  }
});

export default router;
