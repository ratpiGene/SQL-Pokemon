const q3 = `SELECT mv.name as 'Nom', mv.category as 'Catégorie', mv.power as 'Puissance', mv.pp as 'Point de pouvoir', mv.accuracy as 'Précision', mv.description as 'Description' FROM move as mv
JOIN type as tp ON mv.type_id = tp.type_id
WHERE tp.name = 'Roche'
ORDER BY mv.category;`;

module.exports = q3;
