import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.ppPosDb') // returns Database object


export const categoriesFetch = () => {
    return new Promise((resolve, reject) => {

        db.transaction(tx => {

            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS categories (categoryID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'
            )
            tx.executeSql(
                'SELECT * FROM categories', null,
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )

        });

    })
}

export const categoryInsert = (actions) => {
    console.log("actions:",actions)
    const  name  = actions.payload
    db.transaction(tx => {
        tx.executeSql('INSERT INTO categories (name) values (?)', [name],
            (txObj, resultSet) => console.log("resultSet:", resultSet),
            (txObj, error) => console.log('Error', error))
    })
}