const executeQuery = require("../executeQuery");
const { q10Results } = require("../expectedResults");
const q10 = require("../student_answer/part_1/q10");

test("La 1er propriété doit s'appeler 'Type'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q10);
  expect(Object.keys(queryResults[0])[0]).toEqual("Type");
});
test("La 2ème propriété doit s'appeler 'Meilleure capacité'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q10);
  expect(Object.keys(queryResults[0])[1]).toEqual("Meilleure capacité");
});
test("La 3ème propriété doit s'appeler 'Meilleure puissance'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q10);
  expect(Object.keys(queryResults[0])[2]).toEqual("Meilleure puissance");
});
test("La 4ème propriété doit s'appeler 'Pire capacité'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q10);
  expect(Object.keys(queryResults[0])[3]).toEqual("Pire capacité");
});
test("La 5ème propriété doit s'appeler 'Pire puissance'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q10);
  expect(Object.keys(queryResults[0])[4]).toEqual("Pire puissance");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q10);
  expect(queryResults).toMatchObject(q10Results);
});
