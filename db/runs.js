import { getDb } from "./db.js"

export async function createRun(userId) {
  try {
    const db = await getDb()
    const run = await db.run('INSERT INTO runs (user_id) VALUES (?)', [userId])
    return run.lastID
  } catch (err) {
    throw new Error(err)
  }
}

export async function updateRunStats(runId, outcome) {
  try {
    const db = await getDb()

    if (outcome === "player_win") {
      await db.run('UPDATE runs SET total_battles = total_battles + 1, wins = wins + 1 WHERE id = ?', [runId])
    } else if (outcome === "player_loss") {
      await db.run('UPDATE runs SET total_battles = total_battles + 1, losses = losses + 1 WHERE id = ?', [runId])
    } else {
      await db.run('UPDATE runs SET total_battles = total_battles + 1 WHERE id = ?', [runId])
    }
  } catch (err) {
    throw new Error(err)
  }
}

// draw
// player_win
// player_loss
// ongoing