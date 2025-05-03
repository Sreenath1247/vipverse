import { query } from "../db.js";

export const getGameList = async (req, res) => {
  try {
    const { rows } = await query("SELECT * FROM gameinfo");
    return res.status(200).json(rows);
  } catch (error) {
    console.error("Error fetching game list:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const searchGame = async (req, res, searchParam) => {
    try {
        const { rows } = await query(`SELECT * FROM gameinfo WHERE name ILIKE $1`, [`%${searchParam}%`]);
        if (rows.length === 0) {
            return res.status(200).json({ message: "No games found" });
        }
        return res.status(200).json(rows);
    } catch (error) {
        console.error("Error searching game:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};