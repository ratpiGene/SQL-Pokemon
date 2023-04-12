const q11 = `SELECT pk.name AS 'Pokemon', COUNT(pm.pokemon_id) AS 'Nombre de capacités'
FROM pokemon AS pk
JOIN pokemon_move AS pm ON pk.pokemon_id = pm.pokemon_id
GROUP BY pk.pokemon_id, pk.name
ORDER BY COUNT(pm.pokemon_id) DESC LIMIT 1;`;

module.exports = q11;
