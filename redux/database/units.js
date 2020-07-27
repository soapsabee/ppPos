import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.ppPosDb') // returns Database object


export const unitsFetch = (actions) => {
    let sqlSelectAll = "SELECT * FROM units"
  
    return new Promise((resolve, reject) => {

        db.transaction(tx => {

            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS units (unitID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'
            )
            tx.executeSql(
                sqlSelectAll, null,
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )

        });

    })
}


export const unitInsert = (actions) => {
    const name = actions.payload
    db.transaction(tx => {
        tx.executeSql('INSERT INTO units (name) values (?)', [name],
            (txObj, resultSet) => console.log("resultSet:", resultSet),
            (txObj, error) => console.log('Error', error))
    })
}




export const unitSearch = async (actions) => {
    return new Promise((resolve, reject)=>{
        
        db.transaction(tx => {

            tx.executeSql(
                `SELECT * FROM units WHERE name LIKE '%${actions}%' `,null,
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )

        });

    })
}




export const unitDelete = async (actions) => {
    return new Promise((resolve, reject) => {


        db.transaction(tx => {

            tx.executeSql(
                'DELETE FROM units WHERE unitID = ?', [actions.unitID],
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )

        });

    })
}