const executeQuery = require("../executeQuery");
const { q4Results } = require("../expectedResults");
const q4 = require("../student_answer/part_1/q4");

test("La 1er propriété doit s'appeler 'Id'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q4);
  expect(Object.keys(queryResults[0])[0]).toEqual("Id");
});
test("La 2ème propriété doit s'appeler 'Talent'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q4);
  expect(Object.keys(queryResults[0])[1]).toEqual("Talent");
});
test("La 3ème propriété doit s'appeler 'Description'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q4);
  expect(Object.keys(queryResults[0])[2]).toEqual("Description");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q4);
  expect(queryResults).toMatchObject(q4Results);
});
