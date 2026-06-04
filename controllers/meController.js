import { getDb } from '../db/db.js';

export async function getCurrentUser(req, res) {
  try {
    const db = await getDb()

    if (req.session.userId) {
      const user = await db.get('SELECT * FROM users WHERE id = ?', [req.session.userId])
      return res.json({ isLoggedIn: true, name: user.name })
    } else {
      return res.json({ isLoggedIn: false })
    }
  } catch (err) {
    return res.status(500).json({ error: "Internal server error", message: err.message })
  }
}
