import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabaseSync('db.ppPosDb') // returns Database object


export const unitsFetch = async () => {
    let sqlSelectAll = "SELECT * FROM units";
    try {

        await db.runAsync('CREATE TABLE IF NOT EXISTS units (unitID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)');
        return await db.getAllAsync(sqlSelectAll);

    } catch (error) {
        console.error("Error fetching units:", error);
        throw error; // Ensures caller can handle the error
    }
};


export const unitInsert = (actions) => {
    const name = actions.payload
    try {
        db.withTransactionAsync(async () => {
            await db.runAsync('INSERT INTO units (name) values (?)', [name])
        })
    } catch (err) {
        console.log("err: ", err)
    }

}




export const unitSearch = async (actions) => {
    try {
        const data = await db.getAllAsync(`SELECT * FROM units WHERE name LIKE '%${actions}%' `, null)
        return data
    } catch (error) {
        console.log('Error ', error)
    }
}




export const unitDelete = async (actions) => {
    try {
        await db.runAsync('DELETE FROM units WHERE unitID = ?', [actions.unitID])        
    } catch (error) {
        console.log("error: ",error)
    }
}

export const deleteUnitsTable = async () => {
    try {
        await db.runAsync(`DROP TABLE IF EXISTS units`, null)
    } catch (error) {
        console.log("error: ",error)
    }
}