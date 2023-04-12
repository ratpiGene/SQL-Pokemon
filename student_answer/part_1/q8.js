const q8 = `SELECT t.name AS 'Nom du type',
COUNT(DISTINCT pt.pokemon_id) as "Nombre de pokemon",
SUM(CASE WHEN pt.slot = 1 THEN 1 ELSE 0 END) as "Nombre de pokemon avec le type slot 1",
SUM(CASE WHEN pt.slot = 2 THEN 1 ELSE 0 END) as "Nombre de pokemon avec le type slot 2"
FROM type as t
JOIN pokemon_type AS pt ON t.type_id = pt.type_id
GROUP BY t.name
ORDER BY "Nombre de pokemon" DESC, "Nombre de pokemon avec le type slot 1" DESC;`;

module.exports = q8;
