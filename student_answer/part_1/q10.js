const q10 = `SELECT t.name AS "Type",
       (SELECT mv.name FROM move mv WHERE t.type_id=mv.type_id ORDER BY mv.power DESC LIMIT 1) AS "Meilleure capacité",
       (SELECT mv.power FROM move mv WHERE t.type_id=mv.type_id ORDER BY mv.power DESC LIMIT 1) AS "Meilleure puissance",
       (SELECT mv.name FROM move mv WHERE t.type_id=mv.type_id AND mv.power IS NOT NULL ORDER BY mv.power ASC LIMIT 1) AS "Pire capacité",
       (SELECT mv.power FROM move mv WHERE t.type_id=mv.type_id AND mv.power IS NOT NULL ORDER BY mv.power ASC LIMIT 1) AS "Pire puissance"
FROM type t;`;

module.exports = q10;
