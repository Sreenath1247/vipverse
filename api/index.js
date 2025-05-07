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
const supabaseEmail = process.env.SUPABASE_EMAIL;
const supabasePassword = process.env.SUPABASE_PASSWORD;
var supabase = createClient(supabaseUrl, supabaseKey);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
var token = "";
//supabase intialization
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  token = data.session?.access_token;
  supabase = createClient(supabaseUrl, supabaseKey, {
    global: {
      headers: {
        Authorization: `Bearer ${data.session?.access_token}`,
      },
    },
  });
  if (error) {
    return res.status(401).json({ error: error.message });
  }
  res.json({ data });
});

async function init() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: supabaseEmail,
    password: supabasePassword,
  });
  token = data.session?.access_token;
  const options = {
    db: {
      schema: 'public',
    },
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    },
    global: {
      headers: {
        Authorization: `Bearer ${data.session?.access_token}`,
      },
    },
  }
  supabase = createClient(supabaseUrl, supabaseKey, options);
  if (error) {
    return res.status(401).json({ error: error.message });
  }
}

//get game list
app.get("/api/gamelist", async (req, res) => {
  try {
    let { data, error } = await supabase.from("gameinfo").select("*");
    if (error) throw error;
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching games list:", error.message);
    res.status(500).json({ error: "Error fetching games list" });
  }
});

//get game images
app.get("/api/gamelist/images", async (req, res) => {
  try {
    let { data, error } = await supabase
      .from("gameimages")
      .select("name,image");
    if (error) throw error;
    res
      .status(200)
      .json(data.map((item) => ({ name: item.name, image: item.image })));
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

app.get("/api/upcoming", async (req,res) => {
  try {
    let { data,error} = await supabase.from("upcoming").select("*");
    if(error) throw error;
    res.status(200).json(data);
  } catch(error) {
    console.error("Error fetching upcoming games:", error.message);
    res.status(500).json({ error: "Error fetching upcoming games" });
  }
})

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  init();
});
