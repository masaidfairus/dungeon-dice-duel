import { getDb } from "./db.js"

export const heroes = async () => {
  try {
    const db = await getDb()
    return await db.all('SELECT *, attack_power AS attackPower, defense_power AS defensePower, max_hp AS maxHp, image_url AS imageUrl FROM heroes')
  } catch (err) {
    throw new Error(err)
  }
}