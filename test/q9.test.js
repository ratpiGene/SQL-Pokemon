const executeQuery = require("../executeQuery");
const { q9Results } = require("../expectedResults");
const q9 = require("../student_answer/part_1/q9");

test("La 1er propriété doit s'appeler 'Type'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q9);
  expect(Object.keys(queryResults[0])[0]).toEqual("Type");
});
test("La 2ème propriété doit s'appeler 'Capacité'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q9);
  expect(Object.keys(queryResults[0])[1]).toEqual("Capacité");
});
test("La 3ème propriété doit s'appeler 'Puissance'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q9);
  expect(Object.keys(queryResults[0])[2]).toEqual("Puissance");
});
test("La 4ème propriété doit s'appeler 'Précision'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q9);
  expect(Object.keys(queryResults[0])[3]).toEqual("Précision");
});
test("La 5ème propriété doit s'appeler 'Description'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q9);
  expect(Object.keys(queryResults[0])[4]).toEqual("Description");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q9);
  expect(queryResults).toMatchObject(q9Results);
});
