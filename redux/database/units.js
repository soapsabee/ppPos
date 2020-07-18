import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.ppPosDb') // returns Database object


export const unitsFetch = () => {
    return new Promise((resolve, reject) => {

        db.transaction(tx => {

            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS units (unitID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'
            )
            tx.executeSql(
                'SELECT * FROM units', null,
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )

        });

    })
}


export const unitInsert = (actions) => {
    const  name  = actions.payload
    db.transaction(tx => {
        tx.executeSql('INSERT INTO units (name) values (?)', [name],
            (txObj, resultSet) => console.log("resultSet:", resultSet),
            (txObj, error) => console.log('Error', error))
    })
}