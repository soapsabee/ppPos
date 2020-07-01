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
    content_row_between:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    productTotalPanel: {
        flexDirection: "row",
        justifyContent: "space-between",
        height:170,
        padding: 30
    }


})