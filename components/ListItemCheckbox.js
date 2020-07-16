import React from 'react'
import { View, Text } from 'react-native'
import { Checkbox } from 'react-native-paper';


export default class ListItemCheckbox extends React.Component {


    render() {
        return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Checkbox />
                <Text>{this.props.name }</Text>
            </View>
        )
    }

}
