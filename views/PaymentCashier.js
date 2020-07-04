import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import { container } from '../styles/components/'
import {button} from '../styles/components/_button'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class PaymentCashier extends React.Component {

  render() {
    return (
      <View style={container.defaultGround}>
        <View style={{ flexDirection: "column", flex: 1, justifyContent: "space-between", margin: 15 }}>


          <View >

            <Text style={{ fontSize: 20 }}>ระบุจำนวนเงินที่ได้รับ</Text>

          </View>

          <View style={{ flexDirection: "row-reverse" }} >

            <Text style={{ fontSize: 60 }}>20.0</Text>

          </View>

          <View style={{ alignItems: "center" }}>

            <View style={{ justifyContent: "center" }}>

              <View style={{ flexDirection: "row" }}>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => console.log('Pressed')}>
                  7
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => console.log('Pressed')}>
                  8
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => console.log('Pressed')}>
                  9
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => console.log('Pressed')}>
                  <Icon
                    name="arrow-left"
                    size={30}
                    color="white"
                  />
                </Button>
              </View>



              <View style={{ flexDirection: "row" }}>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => console.log('Pressed')}>
                  4
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => console.log('Pressed')}>
                  5
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => console.log('Pressed')}>
                  6
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => console.log('Pressed')}>
                  AC
          </Button>
              </View>




              <View style={{ flexDirection: "row" }}>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => console.log('Pressed')}>
                  1
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => console.log('Pressed')}>
                  2
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => console.log('Pressed')}>
                  3
          </Button>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => console.log('Pressed')}>
                  0
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => console.log('Pressed')}>
                  .
          </Button>
                <Button style={{ backgroundColor:"#6ACA6B" , justifyContent: "center", margin: 2 }} contentStyle={{ width: 140, height: 70, }} mode="contained" onPress={() => this.props.navigation.navigate('ConfirmPayment')}>
                  ยืนยัน
          </Button>
              </View>




            </View>
          </View>
        </View>
      </View>

    )
  }
}
