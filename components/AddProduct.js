import React from 'react'
import { View } from 'react-native'
import { TextInput, Button, Modal, Text, Portal, Provider, IconButton } from 'react-native-paper';
import { button, input, panel } from '../styles/components/'
import { dispatchProducts, SET_HANDLE_INPUT_CASHIER , ADD_BASKET_CASHIER_MANUAL } from '../redux/actions/'


export default class AddProduct extends React.Component {






    render() {
        return (
            <View style={panel.panel_row_around}>
                <View>
                    <TextInput style={input.cashierAddInput}
                        label="ป้อนบาร์โค๊ด"
                        onChangeText={(value) => this.props.dispatch(dispatchProducts(SET_HANDLE_INPUT_CASHIER, { value: value, key: "barcode" }))}
                        value={this.props.cashierInputProducts.barcode}
                    />
                    <TextInput style={input.cashierAddInput}
                        label="จำนวน"
                        onChangeText={(value) => this.props.dispatch(dispatchProducts(SET_HANDLE_INPUT_CASHIER, { value: value, key: "number" }))}
                        value={this.props.cashierInputProducts.number}

                    />

                </View>
                <View style={panel.panel_column_around}>

                    <Button style={button.btnAdd} mode="contained"  onPress={() =>  this.props.dispatch(dispatchProducts(ADD_BASKET_CASHIER_MANUAL, { value: this.props.cashierInputProducts, key: "number" }))}>
                        
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