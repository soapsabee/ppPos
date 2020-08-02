import React from 'react'
import { View, Text } from 'react-native'
import { Button  } from 'react-native-paper';
import {  button,  panel,  text } from '../styles/components/'
import { connect } from 'react-redux'
import { dispatchProducts , CLEAR_CASHIER} from '../redux/actions';


export default class PaymentPanel extends React.Component {


    render(){

        return (

            <View style={panel.productTotalPanel}>
            <View style={panel.panel_column_around}>
              <View style={panel.panel_row_around}>
                <Text >
                  รวม
              </Text>
                <Text style={text.textTotal}>{this.props.totalCashier}</Text>
  
              </View>
  
              <Button style={button.btnDelete} mode="contained" onPress={() => this.props.dispatch(dispatchProducts(CLEAR_CASHIER, { value: "null", key: "null" }))}>
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


