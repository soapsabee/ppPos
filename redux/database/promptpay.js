import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.ppPosDb') // returns Database object
import * as FileSystem from 'expo-file-system';

export const promptPayFetch = (actions) =>{

    return new Promise((resolve, reject) => {
        db.transaction(async (tx) => {


            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS promptpay (promptpayNumber TEXT)"
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


        db.transaction(tx => {

        
            // tx.executeSql(
            //     "CREATE TABLE IF NOT EXISTS promptpay (promptpayNumber INTEGER PRIMARY )"
            // )

            // tx.executeSql('INSERT INTO promptpay (promptpayNumber) values (?)', ["null"],
            //         (txObj, resultSet) => console.log("resultSet:", resultSet),
            //         (txObj, error) => console.log('Error', error)
            // )


            tx.executeSql(
                `UPDATE promptpay SET promptpayNumber = ${actions}`, null,
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )

        });

    })
}