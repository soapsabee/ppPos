import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('db.ppPosDb') // returns Database object
import * as FileSystem from 'expo-file-system';

export const productsFetch = () => {
    return new Promise((resolve, reject) => {

        db.transaction(tx => {



            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price FLOAT, quantity INT, cost FLOAT , unit TEXT , barcode TEXT, detail TEXT, imageURI TEXT, status INT)'
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

export const productsInsert = async (actions) => {
    const folder = FileSystem.documentDirectory + 'image'
    const { name, price, quantity, cost, unit, barcode, detail, imageURI, status } = actions.payload
    const newimageURI = imageURI.substring(imageURI.lastIndexOf("/") + 1)

    try {

        await FileSystem.makeDirectoryAsync(folder, {
            intermediates: true
        })
        await FileSystem.copyAsync({ from: imageURI, to: `${folder}/${newimageURI}` })

        await db.transaction(tx => {
            tx.executeSql('INSERT INTO products (name, price, quantity, cost , unit, barcode, detail, imageURI, status ) values (?,?,?,?,?,?,?,?,?)', [name, price, quantity, cost, unit, barcode, detail, `${folder}/${newimageURI}`, status],
                (txObj, resultSet) => console.log("resultSet:", resultSet),
                (txObj, error) => console.log('Error', error))
        })
    } catch (error) {
        console.log("error:", error);
    }


}

export const productDelete = async (actions) =>{
    return new Promise((resolve, reject) => {


        db.transaction(tx => {

            tx.executeSql(
                'DELETE FROM products WHERE id = ?', [actions.id],
                (txObj, { rows: { _array } }) => resolve(_array)
                ,
                (txObj, error) => console.log('Error ', error)

            )

        });

    })
}