const q1 = `SELECT a.pokedex_number  as 'N°', a.name as 'Pokemon', a.description as 'Description'  FROM pokemon a
WHERE LENGTH(a.description) < 75
ORDER BY a.pokedex_number;`;

module.exports = q1;
