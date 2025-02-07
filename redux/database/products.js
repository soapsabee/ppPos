import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';

// Use openDatabaseSync for expo-sqlite v15+
const db = SQLite.openDatabaseSync('db.ppPosDb'); // Returns Database object

export const productsFetch = (actions) => {
    let sqlSelectAll = `SELECT products.id, products.name, products.price, products.quantity, products.cost, 
                        products.unitID, products.barcode, products.detail, products.imageURI, products.status, 
                        categories.categoryID, categories.name as categoryName, units.name as unitName 
                        FROM products 
                        LEFT JOIN categories ON products.categoryID = categories.categoryID  
                        LEFT JOIN units ON products.unitID = units.unitID 
                        WHERE products.status = 1`;

    if (actions && actions !== "export") {
        sqlSelectAll += ` AND products.categoryID = ?`;
    } else if (actions === "export") {
        sqlSelectAll = "SELECT * FROM products";
    }

    return new Promise((resolve, reject) => {
        db.withTransactionAsync(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS categories (categoryID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'
            );

            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS units (unitID INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)'
            );

            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price FLOAT, quantity INT, cost FLOAT, barcode TEXT UNIQUE, detail TEXT, imageURI TEXT, status INT, unitID INT, categoryID INT)'
            );

            tx.executeSql(
                sqlSelectAll, actions && actions !== "export" ? [actions] : [],
                (txObj, { rows: { _array } }) => resolve(_array),
                (txObj, error) => {
                    console.log('Error ', error);
                    reject(error);
                }
            );
        });
    });
};

export const productsInsert = async (actions) => {
    console.log(actions);
    const folder = FileSystem.documentDirectory + 'image';
    const { name, price, quantity, cost, barcode, detail, imageURI, status, unitID, categoryID } = actions.payload;
    const newimageURI = imageURI ? imageURI.substring(imageURI.lastIndexOf("/") + 1) : null;
    const image = imageURI ? `${folder}/${newimageURI}` : null;

    try {
        if (imageURI) {
            await FileSystem.makeDirectoryAsync(folder, { intermediates: true });
            await FileSystem.copyAsync({ from: imageURI, to: `${folder}/${newimageURI}` });
        }

        db.withTransactionAsync(tx => {
            tx.executeSql(
                'INSERT INTO products (name, price, quantity, cost, barcode, detail, imageURI, status, unitID, categoryID) VALUES (?,?,?,?,?,?,?,?,?,?)',
                [name, price, quantity, cost, barcode, detail, image, status, unitID, categoryID],
                (txObj, resultSet) => console.log("resultSet:", resultSet),
                (txObj, error) => console.log('Error', error)
            );
        });
    } catch (error) {
        console.log("error:", error);
    }
};

export const productDelete = async (actions) => {
    return new Promise((resolve, reject) => {
        db.withTransactionAsync(tx => {
            tx.executeSql(
                'DELETE FROM products WHERE id = ?', [actions.id],
                (txObj, { rows: { _array } }) => resolve(_array),
                (txObj, error) => {
                    console.log('Error ', error);
                    reject(error);
                }
            );
        });
    });
};

export const productSearch = async (actions) => {
    return new Promise((resolve, reject) => {
        db.withTransactionAsync(tx => {
            tx.executeSql(
                'SELECT * FROM products WHERE name LIKE ?', [`%${actions}%`],
                (txObj, { rows: { _array } }) => resolve(_array),
                (txObj, error) => {
                    console.log('Error ', error);
                    reject(error);
                }
            );
        });
    });
};

export const productBarcodeSearch = async (actions) => {
    return new Promise((resolve, reject) => {
        db.withTransactionAsync(tx => {
            tx.executeSql(
                `SELECT products.id, products.name, products.price, products.quantity, products.cost, 
                 products.unitID, products.barcode, products.detail, products.imageURI, products.status, 
                 categories.categoryID, categories.name as categoryName, units.name as unitName 
                 FROM products 
                 LEFT JOIN categories ON products.categoryID = categories.categoryID  
                 LEFT JOIN units ON products.unitID = units.unitID 
                 WHERE products.barcode = ?`,
                [actions],
                (txObj, { rows: { _array } }) => resolve(_array),
                (txObj, error) => {
                    console.log('Error ', error);
                    reject(error);
                }
            );
        });
    });
};

export const productUpdate = async (actions) => {
    return new Promise((resolve, reject) => {
        db.withTransactionAsync(tx => {
            tx.executeSql(
                `UPDATE products SET ${actions.set} WHERE ${actions.where}`, [],
                (txObj, { rows: { _array } }) => resolve(_array),
                (txObj, error) => {
                    console.log('Error ', error);
                    reject(error);
                }
            );
        });
    });
};

export const productDuplicate = async (actions) => {
    console.log("Actions:", actions);
    return new Promise((resolve, reject) => {
        db.withTransactionAsync(tx => {
            tx.executeSql(
                `SELECT * FROM products WHERE ${actions.where} = ?`, [actions.value],
                (txObj, { rows: { _array } }) => resolve(_array),
                (txObj, error) => {
                    console.log('Error ', error);
                    reject(error);
                }
            );
        });
    });
};

export const deleteProductsTable = () => {
    return new Promise((resolve, reject) => {
        db.withTransactionAsync(tx => {
            tx.executeSql(
                `DROP TABLE IF EXISTS products`, [],
                (txObj, { rows: { _array } }) => resolve(_array),
                (txObj, error) => {
                    console.log('Error ', error);
                    reject(error);
                }
            );
        });
    });
};
