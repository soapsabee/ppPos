import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.ppPosDb') // returns Database object

export const recieptFetch = (actions) => {
    return new Promise((resolve, reject) => {
        db.transaction(async (tx) => {

            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS reciept (date TEXT PRIMARY KEY , balance FLOAT , totalcost FLOAT)'
            )

            tx.executeSql(
                'SELECT * FROM reciept', null,
                (txObj, { rows: { _array } }) => resolve(_array)

                ,
                (txObj, error) => console.log('Error ', error)

            )

        });
    })
}

export const recieptInsert = (actions) => {

    const { date , balance , totalcost } = actions.payload

    db.transaction(async (tx) => {

        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS reciept (date TEXT PRIMARY KEY , balance FLOAT , totalcost FLOAT)'
        )

        tx.executeSql(
            `INSERT INTO reciept( date , balance , totalcost ) values (${date} , ${balance} , ${totalcost})`, null,
            (txObj, { rows: { _array } }) => resolve(_array)

            ,
            (txObj, error) => console.log('Error ', error)

        )

    });


}


export const recieptSearch = (actions) => {
    return new Promise((resolve, reject) => {

        db.transaction(tx => {

            tx.executeSql(
                `SELECT * FROM reciept WHERE date = ${actions} `, null,
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )

        });

    })
}

