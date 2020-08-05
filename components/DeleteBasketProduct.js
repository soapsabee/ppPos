import React from 'react'
import { View, Text } from 'react-native'
import { Button  } from 'react-native-paper';
import {  button,  panel,  text } from '../styles/components/'
import { dispatchProducts , CLEAR_BASKET_CHECKED , DELETE_CASHIER} from '../redux/actions';

export default class DeleteBasketProduct extends React.Component {

    render(){
        return (

            <View style={panel.productTotalPanel}>
            <View style={panel.panel_column_around}>
              <View style={{flexDirection:"row"}}>
                <Text >
                เลือก
              </Text>
               <Text style={{color : "#FF0000",marginLeft:10}}>{ this.props.cashierChecked.length}</Text>
                <Text style={{marginLeft:10}}>รายการ</Text>

              </View>
  
              <Button style={button.btnDelete} mode="contained" onPress={() => this.props.dispatch(dispatchProducts(DELETE_CASHIER, { value: this.props.cashierChecked, key: "null" }))}>
                ลบ
            </Button>
  
            </View>
  
            <View style={panel.panel_column_around}>
  
              <Button style={button.btnCancelDelete} mode="contained" onPress={() => this.props.dispatch(dispatchProducts(CLEAR_BASKET_CHECKED, { value: "null", key: "cashierChecked" }))}>
                ยกเลิกการลบ
            </Button>
           
            </View>
  
          </View>

        )
    }

} 