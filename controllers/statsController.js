import { getDb } from '../db/db.js';

export async function getCurrentUserStats(req, res) {
  if (!req.session.userId) {
      return res.status(401).json({ error: "Please log in to access this page." })
  }

  try {
    const db = await getDb()
    const gameStats = await db.all('SELECT total_battles AS totalBattles, created_at AS createdAt, wins, losses FROM runs WHERE user_id = ?', [req.session.userId])
    return res.json({ gameStats: gameStats })
  } catch (err) {
    return res.status(500).json({ error: "Internal server error", message: err.message })
  }
}
