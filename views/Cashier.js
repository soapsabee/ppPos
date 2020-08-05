import React from 'react'
import { View,Text,ScrollView } from 'react-native'
import { container } from '../styles/components/'
import PaymentPanel from '../components/PaymentPanel'
import DeleteBasketProduct from '../components/DeleteBasketProduct'
import NumberBill from '../components/NumberBill'
import AddProduct from '../components/AddProduct'
import CardCashier from '../components/CardCashier'
import { panel, text } from '../styles/components/'

import { connect } from 'react-redux'

export class Cashier extends React.Component {



  render() {

    const { cashier, cashierChecked, cashierInputProducts } = this.props
    return (
      <View style={{ flex: 1 }}>

        <NumberBill />
        <AddProduct dispatch={this.props.dispatch} navigation={this.props.navigation} cashierInputProducts={cashierInputProducts} />
        {(cashier.length > 0 && cashierChecked.length == 0) &&
          <PaymentPanel navigation={this.props.navigation} {...this.props} />
        }

        {
          (cashierChecked.length > 0) &&
          <DeleteBasketProduct dispatch={this.props.dispatch} cashierChecked={cashierChecked} />
        }


          <View style={text.headerListProduct}>
            <Text>รายการสินค้า</Text>
            <Text style={text.textTotal}>{this.props.cashier.length}</Text>
            <Text>รายการ</Text>
          </View>
          <ScrollView >

            {this.props.cashier && this.props.cashier.map((value, key) => <CardCashier keys={key} value={value} checked={this.props.cashierChecked.find(element => element.id == key)} dispatch={this.props.dispatch} />)}

          </ScrollView >


      </View>

    )
  }
}

const mapStateToProps = state => {

  // return state
  return {
    cashier: state.products.cashier,
    totalCashier: state.products.totalCashier,
    cashierChecked: state.products.cashierChecked,
    cashierInputProducts: state.products.cashierInputProducts
  }

}

export default connect(mapStateToProps)(Cashier)
