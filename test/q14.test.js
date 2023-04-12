const executeQuery = require("../executeQuery");
const { q14Results } = require("../expectedResults");
const q14 = require("../student_answer/part_1/q14");

test("La 1er propriété doit s'appeler 'Type'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q14);
  expect(Object.keys(queryResults[0])[0]).toEqual("Type");
});
test("La 2ème propriété doit s'appeler 'HP'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q14);
  expect(Object.keys(queryResults[0])[1]).toEqual("HP");
});
test("La 3ème propriété doit s'appeler 'Attaque'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q14);
  expect(Object.keys(queryResults[0])[2]).toEqual("Attaque");
});
test("La 4ème propriété doit s'appeler 'Défense'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q14);
  expect(Object.keys(queryResults[0])[3]).toEqual("Défense");
});
test("La 5ème propriété doit s'appeler 'Spé. Attaque'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q14);
  expect(Object.keys(queryResults[0])[4]).toEqual("Spé. Attaque");
});
test("La 6ème propriété doit s'appeler 'Spé. Défense'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q14);
  expect(Object.keys(queryResults[0])[5]).toEqual("Spé. Défense");
});
test("La 7ème propriété doit s'appeler 'Vitesse'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q14);
  expect(Object.keys(queryResults[0])[6]).toEqual("Vitesse");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q14);
  expect(queryResults).toMatchObject(q14Results);
});
