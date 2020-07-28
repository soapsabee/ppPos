import React from 'react'
import { View } from 'react-native'
import { TextInput, Button, Modal, Text, Portal, Provider, IconButton } from 'react-native-paper';
import { button, input, panel } from '../styles/components/'


export default class AddProduct extends React.Component {






    render() {
        return (
            <View style={panel.panel_row_around}>
                <View>
                    <TextInput style={input.cashierAddInput}
                        label="ป้อนบาร์โค๊ด"

                    />
                    <TextInput style={input.cashierAddInput}
                        label="จำนวน"

                    />

                </View>
                <View style={panel.panel_column_around}>

                    <Button style={button.btnAdd} mode="contained">
                        เพิ่มสินค้า
            </Button>

                    <Button icon={require('../assets/icon/cashier/scanner.png')} style={button.btnScan} mode="contained"  onPress={() => this.props.navigation.navigate('BarCodeScannerProduct',{routeName: 'Cashier' })}>
                        สแกน
            </Button>

                </View>



            </View>

        )
    }

}