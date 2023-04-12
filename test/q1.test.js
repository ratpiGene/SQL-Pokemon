const executeQuery = require("../executeQuery");
const { q1Results } = require("../expectedResults");
const q1 = require("../student_answer/part_1/q1");

test("La 1er propriété doit s'appeler 'N°'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q1);
  expect(Object.keys(queryResults[0])[0]).toEqual("N°");
});
test("La 2ème propriété doit s'appeler 'Pokemon'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q1);
  expect(Object.keys(queryResults[0])[1]).toEqual("Pokemon");
});
test("La 3ème propriété doit s'appeler 'Description'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q1);
  expect(Object.keys(queryResults[0])[2]).toEqual("Description");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q1);
  expect(queryResults).toMatchObject(q1Results);
});
