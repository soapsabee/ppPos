import React from 'react'
import { View } from 'react-native'
import ToolAddProducts from '../components/ToolAddProducts'
import ToolDeleteProducts from '../components/ToolDeleteProducts'

export default class ToolsProducts extends React.Component {


    render() {
        return (
            <View style={{ alignItems: "flex-end" }} >

                {/* <ToolDeleteProducts /> */}

                <ToolAddProducts navigation = {this.props.navigation} />
            </View>



        )
    }



}