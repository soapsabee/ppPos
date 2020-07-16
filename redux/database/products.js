import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.ppPosDb') // returns Database object

export const productsFetch = () => {
    return new Promise((resolve, reject) => {

        db.transaction(tx => {

            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price FLOAT, quantity INT, cost FLOAT , unit TEXT , barcode TEXT, detail TEXT, status TEXT)'
            )
            tx.executeSql(
                'SELECT * FROM products', null,
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )

        });

    })
}

export const productsInsert = (actions) => {

    console.log("productsInsert:", actions);
    const { name , price , quantity , cost , unit , barcode , detail, status} = actions.payload
    db.transaction(tx => {
        tx.executeSql('INSERT INTO products (name, price, quantity, cost , unit, barcode, detail, status ) values (?,?,?,?,?,?,?,?)', [name, price, quantity, cost, unit, barcode, detail, status],
            (txObj, resultSet) => console.log("resultSet:", resultSet),
            (txObj, error) => console.log('Error', error))
    })
}