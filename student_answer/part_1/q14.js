const q14 = `WITH all_types AS (
SELECT DISTINCT name FROM type
)

SELECT
all_types.name as 'Type',
(SELECT name FROM pokemon JOIN base_stat ON pokemon.pokemon_id = base_stat.pokemon_id JOIN pokemon_type ON base_stat.pokemon_id = pokemon_type.pokemon_id WHERE type_id = (SELECT type_id FROM type WHERE name=all_types.name) ORDER BY hp DESC, (hp+attack+defense+spe_attack+spe_defense+speed) DESC, pokedex_number ASC LIMIT 1) AS 'HP',
(SELECT name FROM pokemon JOIN base_stat ON pokemon.pokemon_id = base_stat.pokemon_id JOIN pokemon_type ON base_stat.pokemon_id = pokemon_type.pokemon_id WHERE type_id = (SELECT type_id FROM type WHERE name=all_types.name) ORDER BY attack DESC, (hp+attack+defense+spe_attack+spe_defense+speed) DESC, pokedex_number ASC LIMIT 1) AS 'Attaque',
(SELECT name FROM pokemon JOIN base_stat ON pokemon.pokemon_id = base_stat.pokemon_id JOIN pokemon_type ON base_stat.pokemon_id = pokemon_type.pokemon_id WHERE type_id = (SELECT type_id FROM type WHERE name=all_types.name) ORDER BY defense DESC, (hp+attack+defense+spe_attack+spe_defense+speed) DESC, pokedex_number ASC LIMIT 1) AS 'Défense',
(SELECT name FROM pokemon JOIN base_stat ON pokemon.pokemon_id = base_stat.pokemon_id JOIN pokemon_type ON base_stat.pokemon_id = pokemon_type.pokemon_id WHERE type_id = (SELECT type_id FROM type WHERE name=all_types.name) ORDER BY spe_attack DESC, (hp+attack+defense+spe_attack+spe_defense+speed) DESC, pokedex_number ASC LIMIT 1) AS 'Spé. Attaque',
(SELECT name FROM pokemon JOIN base_stat ON pokemon.pokemon_id = base_stat.pokemon_id JOIN pokemon_type ON base_stat.pokemon_id = pokemon_type.pokemon_id WHERE type_id = (SELECT type_id FROM type WHERE name=all_types.name) ORDER BY spe_defense DESC, (hp+attack+defense+spe_attack+spe_defense+speed) DESC, pokedex_number ASC LIMIT 1) AS 'Spé. Défense',
(SELECT name FROM pokemon JOIN base_stat ON pokemon.pokemon_id = base_stat.pokemon_id JOIN pokemon_type ON base_stat.pokemon_id = pokemon_type.pokemon_id WHERE type_id = (SELECT type_id FROM type WHERE name=all_types.name) ORDER BY speed DESC, (hp+attack+defense+spe_attack+spe_defense+speed) DESC, pokedex_number ASC LIMIT 1) AS 'Vitesse'
FROM all_types;`;

module.exports = q14;
