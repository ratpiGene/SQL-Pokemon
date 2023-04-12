const executeQuery = require("../executeQuery");
const { q7Results } = require("../expectedResults");
const q7 = require("../student_answer/part_1/q7");

test("La 1er propriété doit s'appeler 'N°'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q7);
  expect(Object.keys(queryResults[0])[0]).toEqual("N°");
});
test("La 2ème propriété doit s'appeler 'Nom du pokemon'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q7);
  expect(Object.keys(queryResults[0])[1]).toEqual("Nom du pokemon");
});
test("La 3ème propriété doit s'appeler 'Type 1'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q7);
  expect(Object.keys(queryResults[0])[2]).toEqual("Type 1");
});
test("La 4ème propriété doit s'appeler 'Type 2'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q7);
  expect(Object.keys(queryResults[0])[3]).toEqual("Type 2");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q7);
  expect(queryResults).toMatchObject(q7Results);
});
