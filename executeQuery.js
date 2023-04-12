const sqlite3 = require("sqlite3").verbose();

function executeQuery(databaseFile, sqlQuery) {
  return new Promise((resolve, reject) => {
    if (sqlQuery == "") {
      reject("Query vide");
    }
    let results = [];
    let db = new sqlite3.Database(databaseFile, (err) => {
      if (err) {
        reject(err);
      }
    });

    db.all(sqlQuery, [], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        rows.forEach((row) => {
          results.push(row);
        });
      }
      resolve(results);
    });

    db.close((err) => {
      if (err) {
        reject(err);
      }
    });
  });
}

module.exports = executeQuery;
