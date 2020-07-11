import React, { useState } from 'react';
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

export const productsInsert = () => {

    db.transaction(tx => {
        tx.executeSql('INSERT INTO products (name, price, quantity, cost , unit, barcode, detail, status ) values (?,?,?,?,?,?,?,?)', ["xxx", 15.00, 32, 10.00, "xxx", "xxx", "xxx", "x"],
            (txObj, resultSet) => console.log("resultSet:", resultSet),
            (txObj, error) => console.log('Error', error))
    })
}