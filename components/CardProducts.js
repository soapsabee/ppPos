import React from 'react'
import { View, Text, Image } from 'react-native'
import { Card, Avatar, Checkbox, Divider } from 'react-native-paper';
import { panel } from '../styles/components/'
import { dispatchProducts, UPDATE_BASKET_CHECKED, DELETE_BASKET_CHECKED } from '../redux/actions/'
import { connect } from 'react-redux'

export class CardProducts extends React.Component {


    onCheckedBTN = (id) => {
        if (this.props.checked == undefined) {
            this.props.dispatch(dispatchProducts(UPDATE_BASKET_CHECKED, { value: id, key: "basketChecked" }))
        } else {
            this.props.dispatch(dispatchProducts(DELETE_BASKET_CHECKED, { value: id, key: "basketChecked" }))

        }


    }


    render() {
        const { id, name, cost, price, quantity, barcode, imageURI, categoryName, unitName } = this.props.card
        return (
            <View>

                <Card >
                    <Card.Content style={{ flexDirection: "column" }}>

                        <View style={panel.content_row_between}>

                            <View style={{ flexDirection: "row" }}>
                                <Image style={{
                                    width: 100,
                                    height: 70,
                                    resizeMode: 'contain',

                                }} source={imageURI == "null" ? require('../assets/defaultNoImage.jpg') : { uri: imageURI }} />
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
                                        <Text>{categoryName}</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{ justifyContent: "center" }}>
                                <Checkbox status={this.props.checked ? 'checked' : 'unchecked'} onPress={() => this.onCheckedBTN(id)} />
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
                                <Text>{unitName}</Text>
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