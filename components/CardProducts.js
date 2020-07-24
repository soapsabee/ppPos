import React from 'react'
import { View, Text } from 'react-native'
import { Card, Avatar, Checkbox, Divider } from 'react-native-paper';
import { panel } from '../styles/components/'
import { dispatchProducts, UPDATE_BASKET_CHECKED , DELETE_BASKET_CHECKED } from '../redux/actions/'
import { connect } from 'react-redux'

export class CardProducts extends React.Component {
 

    onCheckedBTN = (id) => {
        if (this.props.checked == undefined) {
            this.props.dispatch(dispatchProducts(UPDATE_BASKET_CHECKED, { value: id, key: "null" }))
        }else{
            this.props.dispatch(dispatchProducts(DELETE_BASKET_CHECKED, { value: id, key: "null" }))
            
        }


    }


    render() {
        const { id, name, cost, price, quantity, barcode, imageURI } = this.props.card
        const { basketCheckedLength , basketChecked , checked} = this.props
        return (
            <View>

                <Card onPress={() => Alert.alert("Hello")}>
                    <Card.Content style={{ flexDirection: "column" }}>

                        <View style={panel.content_row_between}>



                            <View style={{ flexDirection: "row" }}>
                                <Avatar.Image size={60} source={{ uri: imageURI }} />
                                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                    <View>
                                        <Text>บาร์โค๊ด: </Text>
                                        <Text>สินค้า:</Text>
                                        <Text>หมวด:</Text>




                                    </View>
                                </View>
                                <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                    <View>
                                        <Text>{barcode}</Text>
                                        <Text>{name}</Text>
                                        <Text>อาหาร</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{ justifyContent: "center" }}>
                                <Checkbox status={ this.props.checked ? 'checked' : 'unchecked'} onPress={() => this.onCheckedBTN(id)} />
                            </View>

                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
                            <View style={{ flexDirection: "column" }}>
                                <Text>ราคา: </Text>
                                <Text>สถานะ:</Text>
                                <Text>จำนวนเหลือ:</Text>
                            </View>
                            <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                <Text>{price}</Text>
                                <Text>ขาย</Text>
                                <Text>32</Text>
                            </View>
                            <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                <Text>หน่วย:</Text>
                                <Text>ต้นทุน:</Text>
                            </View>
                            <View style={{ flexDirection: "column", marginLeft: 10 }}>
                                <Text>กระป๋อง</Text>
                                <Text>10</Text>
                            </View>

                        </View>


                    </Card.Content>

                </Card>

                <Divider />
            </View>


        )
    }
}


const mapStateToProps = state => {

    // return state
    return {
        products: state.products,
        basketCheckedLength: state.products.basketChecked.length,
        basketChecked: state.products.basketChecked
    }

}

export default connect(mapStateToProps)(CardProducts)