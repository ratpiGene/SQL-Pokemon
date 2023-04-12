const q16 = `SELECT a.name as 'Talent',

(SELECT COUNT(pa.ability_id) from pokemon_ability AS pa WHERE pa.ability_id = a.ability_id) AS 'Nombre possédant le talent',
(SELECT t.name FROM type AS t JOIN pokemon_type AS pt ON pt.type_id = t.type_id JOIN pokemon_ability as pa ON pa.pokemon_id = pt.pokemon_id WHERE pa.ability_id = a.ability_id GROUP BY t.name ORDER BY count(*) DESC LIMIT 1) AS 'Type possédant le plus le talent',
(SELECT ROUND((COUNT(DISTINCT pa.pokemon_id) * 100.0) / (SELECT COUNT(*) FROM pokemon), 2) FROM pokemon_ability AS pa WHERE pa.ability_id = a.ability_id) || '%' AS 'Pourcentage possession',
(SELECT (CASE WHEN ROUND((COUNT(DISTINCT pa.pokemon_id) * 100.0) / (SELECT COUNT(DISTINCT pa.pokemon_id) FROM pokemon_ability pa WHERE pa.ability_id = a.ability_id), 2) = 0.0 THEN '0%' ELSE ROUND((COUNT(DISTINCT pa.pokemon_id) * 100.0) / (SELECT COUNT(DISTINCT pa.pokemon_id) FROM pokemon_ability pa WHERE pa.ability_id = a.ability_id), 2) || '%' END) FROM pokemon_ability AS pa WHERE pa.ability_id = a.ability_id AND pa.is_hidden = 1) AS 'Pourcentage possession cachée',
(SELECT ROUND((COUNT(DISTINCT pa.pokemon_id) * 100.0) / (SELECT COUNT(DISTINCT pa1.pokemon_id) FROM pokemon_ability pa1 GROUP BY pa1.ability_id ORDER BY COUNT(DISTINCT pa1.pokemon_id) DESC LIMIT 1), 2) || '%' FROM pokemon_ability AS pa WHERE pa.ability_id = a.ability_id) AS 'Pourcentage par rapport au talent le plus possédé'

FROM ability AS a

WHERE (SELECT COUNT(pa.ability_id) from pokemon_ability AS pa WHERE pa.ability_id = a.ability_id)
AND (SELECT COUNT(pa.ability_id) from pokemon_ability AS pa WHERE pa.ability_id = a.ability_id)!=0
ORDER BY a.name ASC;`;

module.exports = q16;
