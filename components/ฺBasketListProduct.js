import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Avatar, Divider, Checkbox } from 'react-native-paper';
import { panel, text } from '../styles/components/'



export default class BasketListProduct extends React.Component {

    render() {
        return (

            <View>
                <View style={text.headerListProduct}>
                    <Text>รายการสินค้า</Text>
                    <Text style={text.textTotal}>2</Text>
                    <Text>รายการ</Text>
                </View>

                < ScrollView >
                    <Card>
                        <Card.Content style={panel.content_row_between} >


                            <View style={{ flexDirection: "row" }}>
                                <Avatar.Icon size={60} icon="folder" />
                                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                    <View>
                                        <Text>สินค้า: </Text>
                                        <Text>จำนวน:</Text>
                                        <Text>ราคา:</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                    <View>
                                        <Text>ปลากระป๋อง </Text>
                                        <Text>20 บาท</Text>
                                        <Text>12 กระป๋อง</Text>
                                    </View>
                                </View>

                            </View>
                            <View style={{ justifyContent: "center" }}>
                                <Checkbox />
                            </View>

                        </Card.Content>

                    </Card>
                    <Divider />
                </ScrollView >
            </View>

        )
    }
}