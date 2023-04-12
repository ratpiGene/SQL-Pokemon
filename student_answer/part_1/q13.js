const q13 = `WITH same_type_abilities AS (
  SELECT 
    pk.name AS "Nom du pokemon",
    COUNT(*) AS "Nombre capacité avec le même type"
  FROM pokemon AS pk
    JOIN move AS mv ON mv.move_id = pm.move_id
	JOIN pokemon_move AS pm ON pm.pokemon_id = pk.pokemon_id
	JOIN pokemon_type AS pt ON pt.pokemon_id = pk.pokemon_id
  WHERE
    mv.type_id = pt.type_id
  GROUP BY
    pk.name
)
SELECT
    *
FROM
    same_type_abilities
ORDER BY
    "Nombre capacité avec le même type" DESC,
    "Nom du pokemon" ASC
LIMIT 10;`;

module.exports = q13;
