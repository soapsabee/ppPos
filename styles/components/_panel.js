import { StyleSheet } from 'react-native'


export const panel = StyleSheet.create({

    panel_row_around: {
        flexDirection: "row",
        justifyContent: 'space-around'
    },
    panel_column_around: {
        flexDirection: "column",
        justifyContent: 'space-around'
    },
    productTotalPanel: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 0.2,
        padding: 20
    }


})