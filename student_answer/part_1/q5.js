const q5 = `SELECT pk.pokedex_number as 'N°', pk.name as 'Pokemon' FROM pokemon as pk
JOIN pokemon_ability as pkab ON pk.pokemon_id = pkab.pokemon_id
JOIN ability as ab ON ab.ability_id = pkab.ability_id
WHERE ab.name = 'Coloforce'
ORDER BY pk.pokedex_number ASC;`;

module.exports = q5;
