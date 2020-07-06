import React from 'react'
import { View } from 'react-native'
import { IconButton } from 'react-native-paper';


export default class ToolAddProduct extends React.Component {


    render() {
        return (
            <View style={{ flexDirection: "row", alignItems: "center", }}>

                {/* <IconButton
                    icon="pencil"
                    color="#3366CC"
                    size={60}

                    onPress={() => console.log('Pressed')} /> */}
                <IconButton
                    icon="plus-circle"
                    color="#6ACB9A"
                    size={70}

                    onPress={() => console.log('Pressed')}
                />
            </View>
        )
    }
}