import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.ppPosDb') // returns Database object
import * as FileSystem from 'expo-file-system';

export const promptPayFetch = (actions) =>{

    return new Promise((resolve, reject) => {
        db.transaction(async (tx) => {


            tx.executeSql(
               `CREATE TABLE IF NOT EXISTS promptpay (promptpayNumber TEXT , id INTEGER)`
            )

            tx.executeSql(
                "SELECT * FROM promptpay", null,
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )
        });

    })
}

export const promptPayUpdate = async (actions) => {
    return new Promise((resolve, reject) => {

        console.log("actions: ",actions)

        db.transaction(tx => {

        

            tx.executeSql(
                `INSERT OR IGNORE INTO promptpay (promptpayNumber , id) values (?, ?)`, [`${actions}`,1],
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )

            
            tx.executeSql(
                `UPDATE promptpay SET promptpayNumber = '${actions}' WHERE id=1`, null,
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )

        });

    })
}


export const promptpayDelete =  () => {
    return new Promise((resolve, reject) => {


        db.transaction(tx => {

            tx.executeSql(
                "DROP TABLE IF EXISTS 'promptpay' ", null,
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )

        });

    })
}