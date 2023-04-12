const executeQuery = require("../executeQuery");
const { q3Results } = require("../expectedResults");
const q3 = require("../student_answer/part_1/q3");

test("La 1er propriété doit s'appeler 'Nom'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q3);
  expect(Object.keys(queryResults[0])[0]).toEqual("Nom");
});
test("La 2ème propriété doit s'appeler 'Catégorie'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q3);
  expect(Object.keys(queryResults[0])[1]).toEqual("Catégorie");
});
test("La 3ème propriété doit s'appeler 'Puissance'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q3);
  expect(Object.keys(queryResults[0])[2]).toEqual("Puissance");
});

test("La 4ème propriété doit s'appeler 'Précision'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q3);
  expect(Object.keys(queryResults[0])[4]).toEqual("Précision");
});

test("La 5ème propriété doit s'appeler 'Description'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q3);
  expect(Object.keys(queryResults[0])[5]).toEqual("Description");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q3);
  expect(queryResults).toMatchObject(q3Results);
});

test("La requête recherche le type avec son nom", () => {
  expect(
    ["roche"].some((substring) => q3.toLowerCase().includes(substring))
  ).toEqual(true);
});
