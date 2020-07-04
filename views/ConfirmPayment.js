import React from 'react'
import { View, Text } from 'react-native'
import { container } from '../styles/components/'
import BasketListProduct from '../components/ฺBasketListProduct'
import { Button } from 'react-native-paper';
import PaymentPanel from '../components/PaymentPanel'
import DeleteBasketProduct from '../components/DeleteBasketProduct'
import NumberBill from '../components/NumberBill'
import AddProduct from '../components/AddProduct'

export default class ConfirmPayment extends React.Component {



    render() {
        return (
            <View style={container.defaultGround}>

                <NumberBill />
                <View style={{ flexDirection: "column", padding: 15 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>รวม</Text>
                        <Text style={{ fontSize: 50 }}>24.00</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>รับเงิน</Text>
                        <Text style={{ fontSize: 25 }}>24.00</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text>เงินทอน</Text>
                        <Text style={{ fontSize: 20 }}>0.00</Text>
                    </View>
                    <Button style={{ backgroundColor: "#FD6721" , margin: 2 , alignItems:"center" }} contentStyle={{ width:350,height: 50, }} mode="contained" onPress={() => this.props.navigation.navigate('ConfirmPayment')}>
                        พิมพ์ใบเสร็จ
                    </Button>
                    <Button style={{ backgroundColor: "#6ACA6B" , margin: 2 , alignItems:"center"  }}  contentStyle={{ width:350,height: 50 }}  mode="contained" onPress={() => this.props.navigation.navigate('ConfirmPayment')}>
                        ยืนยันการชำระเงิน
                    </Button>
                </View>
                <BasketListProduct />

            </View>

        )
    }
}
