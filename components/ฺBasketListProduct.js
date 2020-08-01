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
                    <Text style={text.textTotal}>2</Text>
                    <Text>รายการ</Text>
                </View>
                
                < ScrollView >
                    {this.props.cashier && this.props.cashier.map((value) => <CardCashier value={value}/>)}
                    
                </ScrollView >
            </View>

        )
    }
}