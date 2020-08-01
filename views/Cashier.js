import React from 'react'
import { View } from 'react-native'
import { container } from '../styles/components/'
import BasketListProduct from '../components/ฺBasketListProduct'
import PaymentPanel from '../components/PaymentPanel'
import DeleteBasketProduct from '../components/DeleteBasketProduct'
import NumberBill from '../components/NumberBill'
import AddProduct from '../components/AddProduct'
import { connect } from 'react-redux'

export class Cashier extends React.Component {



  render() {

    const { cashier } = this.props
    return (
      <View style={{ flex: 1 }}>

        <NumberBill />
        <AddProduct navigation={this.props.navigation} />
        <PaymentPanel navigation={this.props.navigation} />
        <View>
          <BasketListProduct cashier={cashier} />

        </View>

      </View>

    )
  }
}

const mapStateToProps = state => {

  // return state
  return {
    cashier: state.products.cashier
  }

}

export default connect(mapStateToProps)(Cashier)
