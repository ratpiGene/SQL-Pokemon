const executeQuery = require("../executeQuery");
const { q2Results } = require("../expectedResults");
const q2 = require("../student_answer/part_1/q2");

test("La 1er propriété doit s'appeler 'Pokemon'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q2);
  expect(Object.keys(queryResults[0])[0]).toEqual("Pokemon");
});
test("La 2ème propriété doit s'appeler 'Taille'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q2);
  expect(Object.keys(queryResults[0])[1]).toEqual("Taille");
});
test("La 3ème propriété doit s'appeler 'Poids'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q2);
  expect(Object.keys(queryResults[0])[2]).toEqual("Poids");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q2);
  expect(queryResults).toMatchObject(q2Results);
});
