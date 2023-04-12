const executeQuery = require("../executeQuery");
const { q8Results } = require("../expectedResults");
const q8 = require("../student_answer/part_1/q8");

test("La 1er propriété doit s'appeler 'Nom du type'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q8);
  expect(Object.keys(queryResults[0])[0]).toEqual("Nom du type");
});
test("La 2ème propriété doit s'appeler 'Nombre de pokemon'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q8);
  expect(Object.keys(queryResults[0])[1]).toEqual("Nombre de pokemon");
});
test("La 3ème propriété doit s'appeler 'Nombre de pokemon avec le type slot 1'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q8);
  expect(Object.keys(queryResults[0])[2]).toEqual(
    "Nombre de pokemon avec le type slot 1"
  );
});
test("La 4ème propriété doit s'appeler 'Nombre de pokemon avec le type slot 2'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q8);
  expect(Object.keys(queryResults[0])[3]).toEqual(
    "Nombre de pokemon avec le type slot 2"
  );
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q8);
  expect(queryResults).toMatchObject(q8Results);
});
