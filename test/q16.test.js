const executeQuery = require("../executeQuery");
const { q16Results } = require("../expectedResults");
const q16 = require("../student_answer/part_1/q16");

test("La 1er propriété doit s'appeler 'Talent'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q16);
  expect(Object.keys(queryResults[0])[0]).toEqual("Talent");
});
test("La 2ème propriété doit s'appeler 'Nombre possédant le talent'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q16);
  expect(Object.keys(queryResults[0])[1]).toEqual("Nombre possédant le talent");
});
test("La 3ème propriété doit s'appeler 'Type possédant le plus le talent'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q16);
  expect(Object.keys(queryResults[0])[2]).toEqual(
    "Type possédant le plus le talent"
  );
});
test("La 4ème propriété doit s'appeler 'Pourcentage possession'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q16);
  expect(Object.keys(queryResults[0])[3]).toEqual("Pourcentage possession");
});
test("La 5ème propriété doit s'appeler 'Pourcentage possession cachée'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q16);
  expect(Object.keys(queryResults[0])[4]).toEqual(
    "Pourcentage possession cachée"
  );
});
test("La 6ème propriété doit s'appeler 'Pourcentage par rapport au talent le plus possédé'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q16);
  expect(Object.keys(queryResults[0])[5]).toEqual(
    "Pourcentage par rapport au talent le plus possédé"
  );
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q16);
  expect(queryResults).toMatchObject(q16Results);
});
