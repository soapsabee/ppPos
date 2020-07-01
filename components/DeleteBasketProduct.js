import React from 'react'
import { View, Text } from 'react-native'
import { Button  } from 'react-native-paper';
import {  button,  panel,  text } from '../styles/components/'


export default class PaymentPanel extends React.Component {

    render(){
        return (

            <View style={panel.productTotalPanel}>
            <View style={panel.panel_column_around}>
              <View style={{flexDirection:"row"}}>
                <Text >
                เลือก
              </Text>
                <Text style={{color : "#FF0000",marginLeft:10}}>2</Text>
                <Text style={{marginLeft:10}}>รายการ</Text>

              </View>
  
              <Button style={button.btnDelete} mode="contained" onPress={() => console.log('Pressed')}>
                ลบ
            </Button>
  
            </View>
  
            <View style={panel.panel_column_around}>
  
              <Button style={button.btnCancelDelete} mode="contained" onPress={() => console.log('Pressed')}>
                ยกเลิกการลบ
            </Button>
           
            </View>
  
          </View>

        )
    }

} 