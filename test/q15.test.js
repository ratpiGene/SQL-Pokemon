const executeQuery = require("../executeQuery");
const { q15Results } = require("../expectedResults");
const q15 = require("../student_answer/part_1/q15");

test("La 1er propriété doit s'appeler 'Type'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q15);
  expect(Object.keys(queryResults[0])[0]).toEqual("Type");
});
test("La 2ème propriété doit s'appeler 'Moyenne gen 1 total stat'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q15);
  expect(Object.keys(queryResults[0])[1]).toEqual("Moyenne gen 1 total stat");
});
test("La 3ème propriété doit s'appeler 'Moyenne gen 3 total stat'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q15);
  expect(Object.keys(queryResults[0])[2]).toEqual("Moyenne gen 3 total stat");
});
test("La 4ème propriété doit s'appeler 'Moyenne gen 5 total stat'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q15);
  expect(Object.keys(queryResults[0])[3]).toEqual("Moyenne gen 5 total stat");
});
test("La 5ème propriété doit s'appeler 'Moyenne gen 7 total stat'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q15);
  expect(Object.keys(queryResults[0])[4]).toEqual("Moyenne gen 7 total stat");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q15);
  expect(queryResults).toMatchObject(q15Results);
});
