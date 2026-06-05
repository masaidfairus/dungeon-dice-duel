import express from "express"
import { heroes } from '../db/heroes.js';
import { createDiceGameEngine } from '../domain/diceGameEngine.js'
import { createRun, updateRunStats } from "../db/runs.js";

const engine = createDiceGameEngine(await heroes());
export const diceGameRouter = express.Router()

diceGameRouter.get('/heroes', async (req, res) => {
  try {
    return res.json({heroes: engine.getHeroes()})
  } catch (err) {
    return res.status(500).json({error: err})
  }
})

diceGameRouter.post('/battle/start', async (req, res) => {
  const heroId = req.body.heroId

  if(!heroId) {
    return res.status(400).json({ message:  "Hero ID is required" })
  }

  try {
    if (req.session.userId && !req.session.runId) {
      req.session.runId = await createRun(req.session.userId)
    }
  
    return res.json(engine.startBattle(heroId))
  } catch (err) {
    return res.status(500).json({error: err})
  }
})

diceGameRouter.post('/battle/round', async (req, res) => {
  try {
    const roundResult = engine.playRound()

    if (req.session.runId && roundResult.outcome !== 'ongoing') {
      await updateRunStats(req.session.runId, roundResult.outcome)
    }

    return res.json(roundResult)
  } catch (err) {
    return res.status(500).json({error: err})
  }
})

diceGameRouter.post('/battle/reset', async (req, res) => {
  try {
    req.session.runId = 0
    engine.resetBattle()
    return res.sendStatus(204)
  } catch (err) {
    return res.status(500).json({error: err})
  }
})
