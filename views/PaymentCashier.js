import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper';
import { container } from '../styles/components/'
import { button } from '../styles/components/_button'
import Icon from 'react-native-vector-icons/FontAwesome';
import { dispatchProducts, ADD_ACCEPT_MONEY, BACKSPACE_ACCEPT_MONEY, CLEAR_BASKET_CHECKED , CONFIRM_CASHIER} from "../redux/actions"
import { connect } from 'react-redux'
export class PaymentCashier extends React.Component {


  setAcceptMoney = (number) => {

    this.props.dispatch(dispatchProducts(ADD_ACCEPT_MONEY, { value: number, key: "null" }))

  }


  backspace = () => {
    this.props.dispatch(dispatchProducts(BACKSPACE_ACCEPT_MONEY, { value: "null", key: "null" }))

  }

  clearAcceptMoney = () => {
    this.props.dispatch(dispatchProducts(CLEAR_BASKET_CHECKED, { value: "null", key: "acceptMoney" }))

  }

  confirmCalculator = async (payment) => {
 
      await this.props.dispatch(dispatchProducts(CONFIRM_CASHIER, { value: {acceptMoney : payment.acceptMoney , totalCashier: payment.totalCashier }, key: "changeMoney" }))
      
      if(this.props.changeMoney >= 0){
      this.props.navigation.navigate('ConfirmPayment')
      }
   
  }

  render() {

    const { acceptMoney, totalCashier } = this.props

    return (
      <View style={container.defaultGround}>
        <View style={{ flexDirection: "column", flex: 1, justifyContent: "space-between", margin: 15 }}>


          <View >

            <Text style={{ fontSize: 20 }}>ระบุจำนวนเงินที่ได้รับ</Text>

          </View>

          <View style={{ flexDirection: "row-reverse" }} >

            <Text style={{ fontSize: 60 }}>{acceptMoney != "" ? acceptMoney : "0."}</Text>

          </View>

          <View style={{ alignItems: "center" }}>

            <View style={{ justifyContent: "center" }}>

              <View style={{ flexDirection: "row" }}>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => this.setAcceptMoney("7")}>
                  7
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => this.setAcceptMoney("8")}>
                  8
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => this.setAcceptMoney("9")}>
                  9
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => this.backspace()}>
                  <Icon
                    name="arrow-left"
                    size={30}
                    color="white"
                  />
                </Button>
              </View>



              <View style={{ flexDirection: "row" }}>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => this.setAcceptMoney("4")}>
                  4
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => this.setAcceptMoney("5")}>
                  5
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => this.setAcceptMoney("6")}>
                  6
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => this.clearAcceptMoney()}>
                  AC
          </Button>
              </View>




              <View style={{ flexDirection: "row" }}>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => this.setAcceptMoney("1")}>
                  1
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => this.setAcceptMoney("2")}>
                  2
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => this.setAcceptMoney("3")}>
                  3
          </Button>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => this.setAcceptMoney("0")}>
                  0
          </Button>
                <Button style={button.btnCalculator} contentStyle={button.btnCalculatorContent} mode="contained" onPress={() => this.setAcceptMoney(".")}>
                  .
          </Button>
                <Button style={{ backgroundColor: "#6ACA6B", justifyContent: "center", margin: 2 }} contentStyle={{ width: 140, height: 70, }} mode="contained" onPress={() => this.confirmCalculator({ acceptMoney: acceptMoney, totalCashier: totalCashier })}>
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

const mapStateToProps = state => {

  // return state
  return {
    acceptMoney: state.products.acceptMoney,
    totalCashier: state.products.totalCashier,
    changeMoney: state.products.changeMoney
  }
}

export default connect(mapStateToProps)(PaymentCashier)
