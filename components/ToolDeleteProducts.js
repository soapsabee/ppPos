import React from 'react'
import { View , Text } from 'react-native'
import { IconButton } from 'react-native-paper';


export default class ToolDeleteProducts extends React.Component {


    render() {
        return (
            <View style={{ flexDirection: "row", alignItems: "center", }}>
                <Text>
                    เลือก <Text style={{ color:"red"}}>1</Text> รายการ
              </Text>
                <IconButton
                    icon="delete"
                    color="#FF0000"
                    size={50}

                    onPress={() => console.log('Pressed')}
                />
                <IconButton
                    icon="close-circle-outline"
                    color="black"
                    size={30}

                    onPress={() => console.log('Pressed')}
                />
            </View>
        )
    }
}