import * as SQLite from 'expo-sqlite';

// Use openDatabaseSync for expo-sqlite v15+
const db = SQLite.openDatabaseSync('db.ppPosDb'); // Returns Database object

export const categoriesFetch = () => {
  return new Promise((resolve, reject) => {
    db.withTransactionAsync(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS categories (categoryID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'
      );
      tx.executeSql(
        'SELECT * FROM categories', 
        [],
        (txObj, { rows: { _array } }) => resolve(_array),
        (txObj, error) => {
          console.log('Error ', error);
          reject(error);
        }
      );
    });
  });
};

export const categoryInsert = (actions) => {
  console.log("actions:", actions);
  const name = actions.payload;
  db.withTransactionAsync(tx => {
    tx.executeSql(
      'INSERT INTO categories (name) values (?)', 
      [name],
      (txObj, resultSet) => console.log("resultSet:", resultSet),
      (txObj, error) => console.log('Error', error)
    );
  });
};

export const categoryDelete = async (actions) => {
  return new Promise((resolve, reject) => {
    db.withTransactionAsync(tx => {
      tx.executeSql(
        'DELETE FROM categories WHERE categoryID = ?', 
        [actions.categoryID],
        (txObj, { rows: { _array } }) => resolve(_array),
        (txObj, error) => {
          console.log('Error ', error);
          reject(error);
        }
      );
    });
  });
};

export const categorySearch = async (actions) => {
  return new Promise((resolve, reject) => {
    db.withTransactionAsync(tx => {
      tx.executeSql(
        `SELECT * FROM categories WHERE name LIKE ?`, 
        [`%${actions}%`],
        (txObj, { rows: { _array } }) => resolve(_array),
        (txObj, error) => {
          console.log('Error ', error);
          reject(error);
        }
      );
    });
  });
};

export const deleteCategoriesTable = () => {
  return new Promise((resolve, reject) => {
    db.withTransactionAsync(tx => {
      tx.executeSql(
        `DROP TABLE IF EXISTS categories`, 
        [],
        (txObj, { rows: { _array } }) => resolve(_array),
        (txObj, error) => {
          console.log('Error ', error);
          reject(error);
        }
      );
    });
  });
};