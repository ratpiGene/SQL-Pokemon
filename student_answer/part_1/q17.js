const q17 = `SELECT t.name as 'Type',
(SELECT COUNT(m.move_id) FROM move m WHERE m.type_id = t.type_id) as 'Nombre capacités',
(SELECT ROUND((COUNT(m.move_id) * 100.0) / (SELECT COUNT(m.move_id) FROM move m WHERE m.type_id = t.type_id), 2) || '%' FROM move m WHERE m.type_id = t.type_id AND m.accuracy = 100) as 'Capacité précision 100%',
(SELECT ROUND((COUNT(m.move_id) * 100.0) / (SELECT COUNT(m.move_id) FROM move m WHERE m.type_id = t.type_id), 2) || '%'  FROM move m WHERE m.type_id = t.type_id AND m.category = 'Physique') as 'Pourcentage capacité physique',
(SELECT ROUND((COUNT(m.move_id) * 100.0) / (SELECT COUNT(m.move_id) FROM move m WHERE m.type_id = t.type_id), 2) || '%' FROM move m WHERE m.type_id = t.type_id AND m.category = 'Spéciale') as 'Pourcentage capacité spéciale',
(SELECT ROUND((COUNT(m.move_id) * 100.0) / (SELECT COUNT(m.move_id) FROM move m WHERE m.type_id = t.type_id), 2) || '%' FROM move m WHERE m.type_id = t.type_id AND m.category = 'Statut') as 'Pourcentage capacité statut',
(SELECT ROUND((COUNT(m.move_id) * 100.0) / (SELECT COUNT(m.move_id) FROM move m WHERE m.type_id = t.type_id), 2) || '%' FROM move m WHERE m.type_id = t.type_id AND m.power <= 40 AND m.power > 0) as 'Pourcentage capacité faible',
(SELECT ROUND((COUNT(m.move_id) * 100.0) / (SELECT COUNT(m.move_id) FROM move m WHERE m.type_id = t.type_id), 2) || '%' FROM move m WHERE m.type_id = t.type_id AND m.power >= 100) as 'Pourcentage capacité forte'
FROM type t
GROUP BY t.type_id
ORDER BY t.type_id ASC;`;

module.exports = q17;
