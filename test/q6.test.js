const executeQuery = require("../executeQuery");
const { q6Results } = require("../expectedResults");
const q6 = require("../student_answer/part_1/q6");

test("La 1er propriété doit s'appeler 'N°'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q6);
  expect(Object.keys(queryResults[0])[0]).toEqual("N°");
});
test("La 2ème propriété doit s'appeler 'Pokemon'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q6);
  expect(Object.keys(queryResults[0])[1]).toEqual("Pokemon");
});
test("La 3ème propriété doit s'appeler 'Talent'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q6);
  expect(Object.keys(queryResults[0])[2]).toEqual("Talent");
});
test("La 4ème propriété doit s'appeler 'Description talent'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q6);
  expect(Object.keys(queryResults[0])[3]).toEqual("Description talent");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q6);
  expect(queryResults).toMatchObject(q6Results);
});
