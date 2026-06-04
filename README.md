# ⚔️ Pokemon Dice Duel

Pokemon Dice Duel is a tactical, web-based, dice-rolling battle game. Players choose from a roster of legendary heroes, engage in automated battles against computer-controlled opponents, and track their wins and losses. The application features user authentication (registration, login, logout) and session-linked game statistics backed by an SQLite database.

---

## 🚀 Getting Started

### 1. Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v16+ recommended) installed on your system.

### 2. Installation

Clone this repository (or copy the project files) and run the following command in the project root to install the dependencies:

```bash
npm install
```

### 3. Database Initialization (Optional)

The project comes with a pre-configured SQLite database file (`database.db`). If you need to rebuild the database tables or re-seed the heroes data from scratch, run:

```bash
# 1. Create the database tables (users, heroes, runs)
node table/createTable.js

# 2. Seed the database with the default roster of 12 heroes
node table/seedTable.js
```

### 4. Running the Application

To run the server locally, you can choose one of the following commands:

- **Development Mode** (with automatic reloading on code changes):
  ```bash
  npm run dev
  ```
- **Production Mode**:
  ```bash
  npm start
  ```

Once started, open your web browser and navigate to:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🎮 How to Play & Game Rules

### Combat Mechanics

Each hero in the Pokemon possesses three primary stats:

- **Attack Power (A)**: The maximum value of the hero's attack die.
- **Defense Power (D)**: The maximum value of the hero's defense die.
- **Max HP**: The starting hit points for the hero.

### The Duel

1.  **Select Your Hero**: Click on any hero card from the roster at the bottom of the page.
2.  **Start the Battle**: Click **"Start Battle"**. The game will automatically select a random opponent from the remaining heroes.
3.  **Roll Rounds**: Click **"Roll Next Round"** to roll the dice. During each round, the server rolls four independent dice:
    - **Your Attack Roll**: A random integer from `1` up to your hero's Attack Power.
    - **Your Defense Roll**: A random integer from `1` up to your hero's Defense Power.
    - **Opponent's Attack Roll**: A random integer from `1` up to their Attack Power.
    - **Opponent's Defense Roll**: A random integer from `1` up to their Defense Power.
4.  **Damage Calculation**:
    - $\text{Damage Dealt to Opponent} = \max(0, \text{Your Attack Roll} - \text{Opponent's Defense Roll})$
    - $\text{Damage Dealt to You} = \max(0, \text{Opponent's Attack Roll} - \text{Your Defense Roll})$
    - Both player and opponent apply damage simultaneously. HP cannot drop below `0`.
5.  **Victory Conditions**:
    - The battle ends as soon as one or both heroes reach `0` HP.
    - If the opponent reaches `0` HP first, you win!
    - If you reach `0` HP first, the opponent wins.
    - If both reach `0` HP in the same round, the battle ends in a draw.

---

## 🔐 User Registration & Stat Tracking

While you can play the game as a guest, signing up unlocks permanent statistics tracking:

- **Create an Account**: Click **"Menu"** -> **"Register"** to create a secure account (passwords are hashed with bcrypt).
- **Sign In**: Sign in to persist game records under your session.
- **View Statistics**: Click **"Game Stats"** to see your historical runs, tracking your wins, losses, and total battles played.

---

## 📂 Project Structure

- `server.js` — The main Express server entry point.
- `public/` — Static assets served to the client:
  - `index.html` / `index.js` — The core game interface.
  - `signin.html` / `signin.js` — User sign-in page.
  - `signup.html` / `signup.js` — User registration page.
  - `stats.html` / `stats.js` — Historical game stats display.
  - `index.css` — Modern styling, variables, layout grids, and animations.
- `routes/` — Express routing configuration:
  - `auth.js` — Authentication endpoints (`/register`, `/login`, `/logout`).
  - `diceGameRoutes.js` — Core game endpoints (`/heroes`, `/battle/start`, `/battle/round`, `/battle/reset`).
  - `me.js` — Returns session user details.
  - `stats.js` — Fetches history stats for the authenticated user.
- `controllers/` — Request handlers and logic layer:
  - `authController.js` — Account creation and credential verification.
  - `meController.js` — Current session user lookup.
  - `statsController.js` — Querying user run history.
- `domain/` — Game logic code:
  - `diceGameEngine.js` — Logic for rolling dice, calculating damage, and keeping track of HP.
- `db/` — Database interface and models:
  - `db.js` — SQLite database driver connection logic.
  - `heroes.js` — Database helper to fetch all heroes.
  - `runs.js` — Database helpers to log battles and update win/loss statistics.
- `table/` — Database schema creation and migration:
  - `createTable.js` — Creates the SQLite tables (`users`, `heroes`, `runs`).
  - `seedTable.js` — Seeds the `heroes` database table with the initial heroes list.
- `data/` — Static data:
  - `heroes.js` — Master list of the 12 default heroes, including names, stats, and asset URLs.
