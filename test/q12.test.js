const executeQuery = require("../executeQuery");
const { q12Results } = require("../expectedResults");
const q12 = require("../student_answer/part_1/q12");

test("La 1er propriété doit s'appeler 'N°'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q12);
  expect(Object.keys(queryResults[0])[0]).toEqual("N°");
});
test("La 2ème propriété doit s'appeler 'Nom du pokemon'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q12);
  expect(Object.keys(queryResults[0])[1]).toEqual("Nom du pokemon");
});
test("La 3ème propriété doit s'appeler 'Nom du talent'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q12);
  expect(Object.keys(queryResults[0])[2]).toEqual("Nom du talent");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q12);
  expect(queryResults).toMatchObject(q12Results);
});
test("La requête recherche le type avec son nom", () => {
  expect(
    ["acier"].some((substring) => q12.toLowerCase().includes(substring))
  ).toEqual(true);
});
