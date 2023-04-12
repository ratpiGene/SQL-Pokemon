const q4 = `SELECT ab.ability_id as 'Id', ab.name as 'Talent', ab.description as 'Description'
FROM ability as ab
WHERE ab.name LIKE '% %' OR ab.name LIKE '%-%'
ORDER BY LENGTH(ab.description) ASC;`;

module.exports = q4;
