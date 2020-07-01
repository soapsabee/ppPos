import React from 'react'
import { View, Text } from 'react-native'
import { numberbill } from '../styles/components/'

export default class NumberBill extends React.Component {


    render() {
        return (
            <View>
                <Text style={numberbill.textStyle}>
                    เลขที่บิล xxxx-xxxx-xxxx
            </Text>
            </View>

        )
    }

}