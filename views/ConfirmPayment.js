import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { container } from '../styles/components/'
import BasketListProduct from '../components/ฺBasketListProduct'
import { Button } from 'react-native-paper';
import PaymentPanel from '../components/PaymentPanel'
import DeleteBasketProduct from '../components/DeleteBasketProduct'
import NumberBill from '../components/NumberBill'
import AddProduct from '../components/AddProduct'
import CardCashier from '../components/CardCashier'
import { dispatchProducts } from "../redux/actions"
import { connect } from 'react-redux'
import { panel, text } from '../styles/components/'


export class ConfirmPayment extends React.Component {



    render() {

        const { cashier , totalCashier , acceptMoney , changeMoney , billNumber} = this.props

        return (
            <View>

                <NumberBill numberBill={billNumber}/>
                <View style={{ flexDirection: "column", padding: 15 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>รวม</Text>
                        <Text style={{ fontSize: 50 }}>{parseFloat(totalCashier).toFixed(2)}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>รับเงิน</Text>
                        <Text style={{ fontSize: 25 }}>{parseFloat(acceptMoney).toFixed(2)}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>เงินทอน</Text>
                        <Text style={{ fontSize: 20 }}>{parseFloat(changeMoney).toFixed(2)}</Text>
                    </View>
                    <Button style={{ backgroundColor: "#FD6721", margin: 2, alignItems: "center" }} contentStyle={{ width: 350, height: 50, }} mode="contained" onPress={() => this.props.navigation.navigate('ConfirmPayment')}>
                        พิมพ์ใบเสร็จ
                    </Button>
                    <Button style={{ backgroundColor: "#6ACA6B", margin: 2, alignItems: "center" }} contentStyle={{ width: 350, height: 50 }} mode="contained" onPress={() => this.props.navigation.navigate('ConfirmPayment')}>
                        ยืนยันการชำระเงิน
                    </Button>
                </View>
                <View >
                    <View style={text.headerListProduct}>
                        <Text>รายการสินค้า</Text>
                        <Text style={text.textTotal}>{this.props.cashier.length}</Text>
                        <Text>รายการ</Text>
                    </View>
                    <ScrollView >

                        {this.props.cashier && this.props.cashier.map((value, key) => <CardCashier keys={key} value={value} checked={this.props.cashierChecked.find(element => element.id == key)} dispatch={this.props.dispatch} />)}

                    </ScrollView >
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
        acceptMoney: state.products.acceptMoney,
        changeMoney: state.products.changeMoney,
        cashierChecked: state.products.cashierChecked,
        cashierInputProducts: state.products.cashierInputProducts,
        billNumber: state.products.billNumber
    
    }
}

export default connect(mapStateToProps)(ConfirmPayment)
