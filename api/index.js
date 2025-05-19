import express from "express";
import cors from "cors";
import games from "./routes/games.mjs";

const app = express();
const port = process.env.PORT || 5050;


// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/games", games);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
