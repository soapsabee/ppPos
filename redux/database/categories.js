import * as SQLite from 'expo-sqlite';

// Use openDatabaseSync for expo-sqlite v15+
const db = SQLite.openDatabaseSync('db.ppPosDb'); // Returns Database object

export const categoriesFetch = async () => {
  try {
    await db.runAsync('CREATE TABLE IF NOT EXISTS categories (categoryID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)')
    const data = await db.getAllAsync('SELECT * FROM categories')
    return data
  } catch (error) {
    console.log('Error ', error);
  }
};

export const categoryInsert = async(actions) => {
  const name = actions.payload;
  try {
    await db.runAsync('INSERT INTO categories (name) values (?)', [name])
  } catch (error) {
    console.log('Error', error)
  }
};

export const categoryDelete = async (actions) => {
  try {
    await db.runAsync('DELETE FROM categories WHERE categoryID = ?', [actions.categoryID])
  } catch (error) {
    console.log('Error', error)
  }
};

export const categorySearch = async (actions) => {
  try {
    const data = await db.getAllAsync(`SELECT * FROM categories WHERE name LIKE ?`, [`%${actions}%`])
    return data
  } catch (error) {
    console.log('Error', error)
  }
};

export const deleteCategoriesTable = async() => {
  try {
     await db.runAsync(`DROP TABLE IF EXISTS categories`)
  } catch (error) {
    console.log('Error', error)
  }
};