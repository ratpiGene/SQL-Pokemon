const executeQuery = require("../executeQuery");
const { q13Results } = require("../expectedResults");
const q13 = require("../student_answer/part_1/q13");

test("La 1er propriété doit s'appeler 'Nom du pokemon'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q13);
  expect(Object.keys(queryResults[0])[0]).toEqual("Nom du pokemon");
});
test("La 2ème propriété doit s'appeler 'Nombre capacité avec le même type'", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q13);
  expect(Object.keys(queryResults[0])[1]).toEqual(
    "Nombre capacité avec le même type"
  );
});
test("Les résultats sont corrects et dans le bonne ordre", async () => {
  let queryResults = await executeQuery("./data/pokemonDB.db", q13);
  expect(queryResults).toMatchObject(q13Results);
});
