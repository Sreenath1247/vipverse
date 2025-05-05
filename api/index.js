import express from "express";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

// Initialize Supabase client
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(cors());
app.use(express.json());

// Routes

//get game list
app.get("/api/gamelist", async (req, res) => {
  try {
    let { data, error } = await supabase.from("gameinfo").select("*");
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching dinosaurs:", error.message);
    res.status(500).json({ error: "Error fetching dinosaurs" });
  }
});

//get game images
app.get("/api/gamelist/images", async (req, res) => {
  try {
    let { data, error } = await supabase.from("gameinfo").select("image");
    if (error) throw error;
    res.status(200).json(data?.map((item) => item.image));
  } catch (error) {
    console.error("Error fetching game images:", error.message);
    res.status(500).json({ error: "Error fetching game images" });
  }
});

//search game list
app.get("/api/search", async (req, res) => {
  const { searchTerm } = req.query;
  try {
    let { data, error } = await supabase
      .from("gameinfo")
      .select("*")
      .ilike("name", `%${searchTerm}%`);
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error searching games:", error.message);
    res.status(500).json({ error: "Error searching games" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
