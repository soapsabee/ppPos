import React from 'react'
import { Card, Avatar, Checkbox, Divider } from 'react-native-paper';
import { View, Text } from 'react-native'
import { panel } from '../styles/components/'
import { Value } from 'react-native-reanimated';

export default class CardCashier extends React.Component {


    render() {
        const { name, price, quantity, unitName } = this.props.value
        return (
            <View >
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
                                    <Text>{name} </Text>
                                    <Text >{quantity} &nbsp; {unitName}</Text>
                                    <Text>{price}</Text>
                                </View>
                            </View>

                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Checkbox />
                        </View>

                    </Card.Content>

                </Card>
                <Divider />
            </View>

        )

    }
}