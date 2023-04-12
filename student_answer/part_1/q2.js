const q2 = `SELECT a.name as 'Pokemon', a.height || ' m' as 'Taille', a.weight || ' kg' as 'Poids' FROM pokemon a
WHERE a.height = 1
ORDER BY a.weight ASC;`;

module.exports = q2;
