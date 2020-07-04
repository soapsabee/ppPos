import React from 'react'
import { View, Text } from 'react-native'
import { Button  } from 'react-native-paper';
import {  button,  panel,  text } from '../styles/components/'


export default class PaymentPanel extends React.Component {


    render(){

        return (

            <View style={panel.productTotalPanel}>
            <View style={panel.panel_column_around}>
              <View style={panel.panel_row_around}>
                <Text >
                  รวม
              </Text>
                <Text style={text.textTotal}>800</Text>
  
              </View>
  
              <Button style={button.btnDelete} mode="contained" onPress={() => console.log('Pressed')}>
                ยกเลิก
            </Button>
  
            </View>
  
            <View style={panel.panel_column_around}>
  
              <Button style={button.btnPayment} mode="contained" onPress={() => this.props.navigation.navigate('PaymentCashier')}>
                ชำระเงินสด
            </Button>
              <Button style={button.btnPromptPay} mode="contained" onPress={() => this.props.navigation.navigate('PromptPayCashier')}>
                พร้อมเพย์
            </Button>
            </View>
  
          </View>

        )
    }

} 