import React from 'react'
import { View } from 'react-native'
import { TextInput, Button  } from 'react-native-paper';
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

                    <Button style={button.btnAdd} mode="contained" onPress={() => console.log('Pressed')}>
                        เพิ่มสินค้า
            </Button>

                    <Button icon={require('../assets/icon/cashier/scanner.png')} style={button.btnScan} mode="contained" onPress={() => console.log('Pressed')}>
                        สแกน
            </Button>

                </View>


            </View>

        )
    }

}