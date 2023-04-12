const q12 = `SELECT pk.pokedex_number AS 'N°', pk.name AS 'Nom du pokemon', ab.name AS 'Nom du talent' FROM pokemon AS pk
JOIN pokemon_ability as pa ON pa.pokemon_id = pk.pokemon_id
JOIN ability as ab ON ab.ability_id = pa.ability_id
JOIN pokemon_type as pt ON pt.pokemon_id = pk.pokemon_id
JOIN type as t ON t.type_id = pt.type_id
WHERE t.name = 'Acier' AND pa.is_hidden = 1
ORDER BY pk.pokedex_number;`;

module.exports = q12;
