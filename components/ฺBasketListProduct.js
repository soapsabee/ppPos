import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Avatar, Divider, Checkbox } from 'react-native-paper';
import { panel, text } from '../styles/components/'
import CardCashier from './CardCashier'
import products from '../redux/reducer/products';


export default class BasketListProduct extends React.Component {

    render() {
        return (

            <View >
                <View style={text.headerListProduct}>
                    <Text>รายการสินค้า</Text>
                    <Text style={text.textTotal}>{this.props.cashier.length}</Text>
                    <Text>รายการ</Text>
                </View>    
                <ScrollView >

                    {this.props.cashier && this.props.cashier.map((value,key) => <CardCashier keys={key} value={value} checked={this.props.cashierChecked.find(element => element.id == key  )} dispatch = {this.props.dispatch}/>)}

                </ScrollView >
            </View>

        )
    }
}

