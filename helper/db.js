import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("scoreboards.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS scoreboards (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, date TEXT NOT NULL, scores TEXT NOT NULL);",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS players (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, place INTEGER NOT NULL, score INTEGER NOT NULL);", //FOREIGN KEY(scoreboardId) REFERENCES scoreboards(id)
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
      /*       tx.executeSql(
        "DROP TABLE scoreboards;",
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      ); */
    });
  });
  return promise;
};

export const insertScoreboard = (title, date, scores) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO scoreboards (title, date, scores) VALUES (?, ?, ?);`,
        [title, date, scores],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertPlayers = (name, place, score) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO players (name, place, score) VALUES (?, ?, ?);`,
        [name, place, score],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchScoreboards = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM scoreboards",
        [],
        (_, result) => {
          console.log(result);
          resolve(result);
        },
        (_, err) => {
          console.log(err);
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const fetchPlayers = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM players",
        [],
        (_, result) => {
          console.log(result);
          resolve(result);
        },
        (_, err) => {
          console.log(err);
          reject(err);
        }
      );
    });
  });
  return promise;
};
