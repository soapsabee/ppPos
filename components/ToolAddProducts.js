import React from 'react'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper';


export default class ToolAddProduct extends React.Component {


    render() {
        return (
            <View style={{ alignItems: "flex-end" }} >
            <View style={{ flexDirection: "row", alignItems: "center", }}>


                <IconButton
                    icon="plus-circle"
                    color="#6ACB9A"
                    size={70}

                    onPress={() => this.props.navigation.navigate('AddProduct')}
                />
            </View>
            </View>

        )
    }
}