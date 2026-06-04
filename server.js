import express from "express"
import session from "express-session"
import { diceGameRouter } from "./routes/diceGameRoutes.js"
import { authRouter } from "./routes/auth.js";
import { meRouter } from "./routes/me.js";
import { statsRouter } from "./routes/stats.js";

const app = express()
const PORT = 3000

app.use(express.json())

app.use(session({
  secret: 'typescript-with-park-skrip',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  }
}))

app.use(express.static('public'))

app.use("/api", diceGameRouter)
app.use("/api/auth/me", meRouter)
app.use("/api/auth/stats", statsRouter)
app.use("/api/auth", authRouter)

app.listen(PORT, () => console.log(`Dungeon Dice Duel App listening on port http://localhost:${PORT}`))