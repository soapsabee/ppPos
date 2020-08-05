import React from 'react'
import { Card, Avatar, Checkbox, Divider } from 'react-native-paper';
import { View, Text , Image} from 'react-native'
import { panel } from '../styles/components/'
import { Value } from 'react-native-reanimated';
import { dispatchProducts, UPDATE_BASKET_CHECKED , DELETE_BASKET_CHECKED } from '../redux/actions/'

export default class CardCashier extends React.Component {

    onCheckedBTN = (keys) => {
        if (this.props.checked == undefined) {
            this.props.dispatch(dispatchProducts(UPDATE_BASKET_CHECKED, { value: keys, key: "cashierChecked" }))
        }else{
            this.props.dispatch(dispatchProducts(DELETE_BASKET_CHECKED, { value: keys, key: "cashierChecked" }))
            
        }


    }
    render() {
        const { id, name, price, quantity, unitName , imageURI } = this.props.value
        return (
            <View >
                <Card>
                    <Card.Content style={panel.content_row_between} >


                        <View style={{ flexDirection: "row" }}>
                            <Image style={{
                                    borderStyle: "solid", borderWidth: 1, borderColor: "#D9D9D9",
                                    width: 100,
                                    height: 70,
                                    resizeMode: 'contain',

                                }}  source={imageURI == "null" ? require('../assets/defaultNoImage.jpg') : { uri: imageURI }} />
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
                            <Checkbox status={ this.props.checked ? 'checked' : 'unchecked'} onPress={() => this.onCheckedBTN(this.props.keys)}/>
                        </View>

                    </Card.Content>

                </Card>
                <Divider />
            </View>

        )

    }
}