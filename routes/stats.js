import express from "express"
import { getCurrentUserStats } from "../controllers/statsController.js";

export const statsRouter = express.Router()

statsRouter.get('/', getCurrentUserStats)