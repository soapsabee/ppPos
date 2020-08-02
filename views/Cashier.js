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

    const { cashier, cashierChecked } = this.props
    return (
      <View style={{ flex: 1 }}>

        <NumberBill />
        <AddProduct navigation={this.props.navigation} />
        {(cashier.length > 0 && cashierChecked.length == 0) &&
          <PaymentPanel navigation={this.props.navigation} {...this.props} />
        }

        {
          (cashierChecked.length > 0 )&&
          <DeleteBasketProduct dispatch={this.props.dispatch} cashierChecked={cashierChecked}/>
        }

        <View>
          <BasketListProduct cashier={cashier} cashierChecked={cashierChecked} dispatch={this.props.dispatch} />
        </View>


      </View>

    )
  }
}

const mapStateToProps = state => {

  // return state
  return {
    cashier: state.products.cashier,
    totalCashier: state.products.totalCashier,
    cashierChecked: state.products.cashierChecked
  }

}

export default connect(mapStateToProps)(Cashier)
