const q9 = `SELECT t.name AS 'Type', mv.name AS 'Capacité', mv.power AS 'Puissance', mv.accuracy AS 'Précision', mv.description AS 'Description'
FROM move AS mv
INNER JOIN type as t ON t.type_id = mv.type_id
WHERE mv.power > 100 AND mv.accuracy >= 90 AND mv.description NOT LIKE '% tour %'
ORDER BY mv.power DESC;`;

module.exports = q9;
