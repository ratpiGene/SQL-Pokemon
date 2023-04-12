const q6 = `SELECT pk.pokedex_number AS 'N°', pk.name AS 'Pokemon', ab.name AS 'Talent', ab.description AS 'Description talent'
FROM pokemon as pk
INNER JOIN pokemon_ability AS pkab ON pkab.pokemon_id = pk.pokemon_id
INNER JOIN ability AS ab ON ab.ability_id = pkab.ability_id
GROUP BY pkab.ability_id
HAVING COUNT(pkab.ability_id) = 1
ORDER BY pk.pokedex_number ASC;`;

module.exports = q6;
