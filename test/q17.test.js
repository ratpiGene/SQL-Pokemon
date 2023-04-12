const executeQuery = require("../executeQuery");
const { q17Results } = require("../expectedResults");
const q17 = require("../student_answer/part_1/q17");

test("La 1er propriété doit s'appeler 'Type'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q17);
  expect(Object.keys(queryResults[0])[0]).toEqual("Type");
});
test("La 2ème propriété doit s'appeler 'Nombre capacités'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q17);
  expect(Object.keys(queryResults[0])[1]).toEqual("Nombre capacités");
});
test("La 3ème propriété doit s'appeler 'Capacité précision 100%'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q17);
  expect(Object.keys(queryResults[0])[2]).toEqual("Capacité précision 100%");
});
test("La 4ème propriété doit s'appeler 'Pourcentage capacité physique'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q17);
  expect(Object.keys(queryResults[0])[3]).toEqual(
    "Pourcentage capacité physique"
  );
});
test("La 5ème propriété doit s'appeler 'Pourcentage capacité spéciale'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q17);
  expect(Object.keys(queryResults[0])[4]).toEqual(
    "Pourcentage capacité spéciale"
  );
});
test("La 6ème propriété doit s'appeler 'Pourcentage capacité statut'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q17);
  expect(Object.keys(queryResults[0])[5]).toEqual(
    "Pourcentage capacité statut"
  );
});
test("La 7ème propriété doit s'appeler 'Pourcentage capacité faible'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q17);
  expect(Object.keys(queryResults[0])[6]).toEqual(
    "Pourcentage capacité faible"
  );
});
test("La 8ème propriété doit s'appeler 'Pourcentage capacité forte'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q17);
  expect(Object.keys(queryResults[0])[7]).toEqual("Pourcentage capacité forte");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q17);
  expect(queryResults).toMatchObject(q17Results);
});
