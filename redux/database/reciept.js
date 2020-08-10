import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.ppPosDb') // returns Database object

export const recieptFetch = (actions) => {


    let sqlSelectAll = "SELECT * FROM reciept"
    if(actions != "") {
        sqlSelectAll += ` WHERE date LIKE '%${actions}%' `
    }

    return new Promise((resolve, reject) => {
        db.transaction(async (tx) => {

            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS reciept (date TEXT PRIMARY KEY , balance FLOAT , totalcost FLOAT)'
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

export const recieptInsert = (actions) => {
    console.log("actions:",actions);
    const { date , balance , totalcost } = actions.payload

    db.transaction(async (tx) => {

        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS reciept (date TEXT PRIMARY KEY , balance FLOAT , totalcost FLOAT)'
        )

        tx.executeSql(
            `INSERT INTO reciept(date ,balance ,totalcost ) values (${JSON.stringify(date)} , ${balance} , ${totalcost})`, null,
            (txObj, resultSet) => console.log("resultSet:", resultSet),
            (txObj, error) => console.log('Error', error))

        

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


export const recieptSUM = (actions) => {
    console.log(actions);
    let sqlSUM = "SELECT SUM(balance) as 'balance', SUM(totalcost) as 'totalcost' FROM reciept "
    if(actions != "" && actions != undefined){
        sqlSUM += ` WHERE date LIKE '%${actions}%' `
    }
    console.log(sqlSUM);
    return new Promise((resolve, reject) => {

        db.transaction(tx => {

            tx.executeSql(
               sqlSUM, null,
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )

        });

    })
}

export const deleteRecieptsTable = () => {
    return new Promise((resolve, reject) => {

        db.transaction(tx => {

            tx.executeSql(
                `DROP TABLE reciept`, null,
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )

        });

    })
}