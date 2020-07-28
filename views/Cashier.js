import React from 'react'
import { View } from 'react-native'
import { container } from '../styles/components/'
import BasketListProduct from '../components/ฺBasketListProduct'
import PaymentPanel from '../components/PaymentPanel'
import DeleteBasketProduct from '../components/DeleteBasketProduct'
import NumberBill from '../components/NumberBill'
import AddProduct from '../components/AddProduct'

export default class Home extends React.Component {



  render() {
    return (
      <View style={container.defaultGround}>

        <NumberBill/>
        <AddProduct navigation = {this.props.navigation}/>
        <PaymentPanel navigation = {this.props.navigation} />
        <BasketListProduct/>
        
      </View>

    )
  }
}
