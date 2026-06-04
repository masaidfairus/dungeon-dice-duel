import { getDb } from "../db/db.js"
import { heroes } from "../data/heroes.js"

async function seedTable() {
  const db = await getDb()
  
  try {
    await db.exec('BEGIN TRANSACTION')

    for (const {name, attackPower, defensePower, maxHp, imageUrl} of heroes) {
      await db.run(`
        INSERT INTO heroes (name, attack_power, defense_power, max_hp, image_url) 
        VALUES (?,?,?,?,?)`,
        [name, attackPower, defensePower, maxHp, imageUrl]
      )
    }

    await db.exec('COMMIT')
    console.log('All records inserted successfully.')

  } catch (err) {

    await db.exec('ROLLBACK')
    console.error('Error inserting data:', err.message)

  } finally {

    await db.close()
    console.log('Database connection closed.')

  }
}

seedTable()