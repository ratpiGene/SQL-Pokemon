const executeQuery = require("../executeQuery");
const { q5Results } = require("../expectedResults");
const q5 = require("../student_answer/part_1/q5");

test("La 1er propriété doit s'appeler 'N°'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q5);
  expect(Object.keys(queryResults[0])[0]).toEqual("N°");
});
test("La 2ème propriété doit s'appeler 'Pokemon'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q5);
  expect(Object.keys(queryResults[0])[1]).toEqual("Pokemon");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q5);
  expect(queryResults).toMatchObject(q5Results);
});

test("La requête recherche le talent avec son nom", () => {
  expect(
    ["coloforce"].some((substring) => q5.toLowerCase().includes(substring))
  ).toEqual(true);
});
