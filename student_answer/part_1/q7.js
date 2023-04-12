const q7 = `SELECT pk.pokedex_number as 'N°', pk.name as 'Nom du pokemon',
    (SELECT t.name from pokemon_type as pt JOIN type t ON t.type_id = pt.type_id WHERE pt.pokemon_id = pk.pokemon_id AND pt.slot = 1 ) AS 'Type 1',
    IFNULL((SELECT t.name from pokemon_type as pt JOIN type t ON t.type_id = pt.type_id WHERE pt.pokemon_id = pk.pokemon_id AND pt.slot = 2), 'N/A') AS 'Type 2' 
    FROM pokemon pk
    ORDER BY pk.pokedex_number ASC;`;

module.exports = q7;
