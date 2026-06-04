import { checkAuth, renderGreeting, showHideMenuItems } from './authUI.js';
import { logout } from './logout.js';

document.getElementById('logout-btn').addEventListener('click', logout)

const statsValue = document.querySelector("#stat-value")
const statusMessage = document.querySelector('#status-message');
const gameStatsEl = document.querySelector('#game-stats');
let gameStats = []

async function getGameStats() {
  const response = await fetch('/api/auth/stats')
  const data = await readJson(response, 'Failed to load game stats.')
  gameStats = data.gameStats || []
  return data 
}

async function readJson(response, fallbackMessage) {
  const bodyText = await response.text();
  let data;

  try {
    data = bodyText ? JSON.parse(bodyText) : {};
  } catch {
    throw new Error(`${fallbackMessage} (HTTP ${response.status})`);
  }

  if (!response.ok) {
    throw new Error(data.message || `${fallbackMessage} (HTTP ${response.status})`);
  }

  return data;
}

function renderGameStats() {
    return gameStats.map(stat => {
    const date = new Date(stat.createdAt)
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: 'numeric', // "4"
      month: 'short', // "Jun"
      year: 'numeric' // "2026"
    })
    return `
            <tr>
              <td class="stat-value">${stat.totalBattles}</td>
              <td class="stat-value">${stat.wins}</td>
              <td class="stat-value">${stat.losses}</td>
              <td class="stat-value">${formattedDate}</td>
            </tr>`
  }).join('')
}

async function init() {
  try {
    const name = await checkAuth();
    if (name) {
      renderGreeting(name);
      showHideMenuItems(name);
      gameStatsEl.style.display = "none"
      await getGameStats()
      statsValue.innerHTML = renderGameStats()
    } else {
      showHideMenuItems(name);
      statusMessage.textContent = 'Please log in to access this page.';
    }
  } catch (error) {
    statusMessage.textContent =
      `${error.message} (Your /api routes still need implementation.)`;
  }
}

init();