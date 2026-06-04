/**
 * Pokemon Dice Duel - Hero data
 *
 * This file defines the heroes for the dice-based battle idea (and shared card data
 * for other game modes that use the same roster).
 *
 * Each hero has:
 * - id: unique numeric id
 * - name: hero name
 * - attackPower: numeric max roll for attack (1..attackPower)
 * - defensePower: numeric max roll for defense (1..defensePower)
 * - maxHp: starting hit points for that hero
 * - imageUrl: used by the frontend to show a card image
 *
 * NOTE:
 * - For Epic 1 you can keep HP ephemeral (per battle) and not store it in DB.
 * - For later epics, you can move this into a "heroes" table.
 */

export const heroes = [
  {
    id: 1,
    name: "Bulbasaur",
    attackPower: 7,
    defensePower: 7,
    maxHp: 16,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
  },
  {
    id: 2,
    name: "Ivysaur",
    attackPower: 8,
    defensePower: 8,
    maxHp: 18,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
  },
  {
    id: 3,
    name: "Venusaur",
    attackPower: 10,
    defensePower: 9,
    maxHp: 22,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png"
  },
  {
    id: 4,
    name: "Charmander",
    attackPower: 8,
    defensePower: 5,
    maxHp: 14,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
  },
  {
    id: 5,
    name: "Charmeleon",
    attackPower: 9,
    defensePower: 6,
    maxHp: 16,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"
  },
  {
    id: 6,
    name: "Charizard",
    attackPower: 12,
    defensePower: 8,
    maxHp: 20,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
  },
  {
    id: 7,
    name: "Squirtle",
    attackPower: 6,
    defensePower: 8,
    maxHp: 15,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png"
  },
  {
    id: 8,
    name: "Wartortle",
    attackPower: 7,
    defensePower: 9,
    maxHp: 17,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png"
  },
  {
    id: 9,
    name: "Blastoise",
    attackPower: 9,
    defensePower: 11,
    maxHp: 21,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png"
  },
  {
    id: 10,
    name: "Pikachu",
    attackPower: 9,
    defensePower: 5,
    maxHp: 13,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
  },
  {
    id: 11,
    name: "Raichu",
    attackPower: 11,
    defensePower: 7,
    maxHp: 17,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/26.png"
  },
  {
    id: 12,
    name: "Eevee",
    attackPower: 6,
    defensePower: 6,
    maxHp: 14,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png"
  },
  {
    id: 13,
    name: "Vaporeon",
    attackPower: 8,
    defensePower: 8,
    maxHp: 22,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png"
  },
  {
    id: 14,
    name: "Jolteon",
    attackPower: 10,
    defensePower: 6,
    maxHp: 16,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/135.png"
  },
  {
    id: 15,
    name: "Flareon",
    attackPower: 11,
    defensePower: 5,
    maxHp: 16,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/136.png"
  },
  {
    id: 16,
    name: "Mewtwo",
    attackPower: 13,
    defensePower: 7,
    maxHp: 24,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
  },
  {
    id: 17,
    name: "Mew",
    attackPower: 9,
    defensePower: 9,
    maxHp: 19,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
  },
  {
    id: 18,
    name: "Snorlax",
    attackPower: 8,
    defensePower: 7,
    maxHp: 26,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/143.png"
  },
  {
    id: 19,
    name: "Gengar",
    attackPower: 11,
    defensePower: 6,
    maxHp: 15,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
  },
  {
    id: 20,
    name: "Dragonite",
    attackPower: 12,
    defensePower: 9,
    maxHp: 23,
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/149.png"
  }
];