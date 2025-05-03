import express from "express";
import cors from "cors";
import gameRouter from "./routes/gameRoute.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use("/api", gameRouter);
