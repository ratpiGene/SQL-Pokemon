const executeQuery = require("../executeQuery");
const { q11Results } = require("../expectedResults");
const q11 = require("../student_answer/part_1/q11");

test("La 1er propriété doit s'appeler 'Pokemon'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q11);
  expect(Object.keys(queryResults[0])[0]).toEqual("Pokemon");
});
test("La 2ème propriété doit s'appeler 'Nombre de capacités'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q11);
  expect(Object.keys(queryResults[0])[1]).toEqual("Nombre de capacités");
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q11);
  expect(queryResults).toMatchObject(q11Results);
});
test("La requête ne contient pas le nom du pokémon ou son numéro de pokédex ou son id", () => {
  expect(
    ["mew", "pokedex_number", "548"].some((substring) =>
      q11.toLowerCase().includes(substring)
    )
  ).toEqual(false);
});

test("Pas d'opération mathématique pour contourner avec l'id", () => {
  expect(
    ["+", "/", "-", "*"].some((substring) =>
      q11.toLowerCase().includes(substring)
    )
  ).toEqual(false);
});
