import React from 'react'
import { View, Text } from 'react-native'
import { IconButton } from 'react-native-paper';
import { dispatchProducts, dispatchCategories, DELETE_PRODUCT, CLEAR_BASKET_CHECKED , DELETE_CATEGORY , CLEAR_BASKET_CHECKED_CATEGORY , DELETE_UNIT , CLEAR_BASKET_CHECKED_UNIT} from '../redux/actions';


export default class ToolDeleteProducts extends React.Component {


    render() {
        return (
            <View style={{ alignItems: "flex-end" }} >

                {this.props.route.name == "Products" &&
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Text>
                            เลือก <Text style={{ color: "red" }}>{this.props.count}</Text> รายการ
                        </Text>

                        <IconButton
                            icon="delete"
                            color="#FF0000"
                            size={50}

                            onPress={() => this.props.dispatch(dispatchProducts(DELETE_PRODUCT, { value: this.props.basketChecked, key: "null" }))}
                        />
                        <IconButton
                            icon="close-circle-outline"
                            color="black"
                            size={30}

                            onPress={() => this.props.dispatch(dispatchProducts(CLEAR_BASKET_CHECKED, { value: "null", key: "basketChecked" }))}
                        />

                    </View>
                }

                {this.props.route.name == "CategoryAdd" &&
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Text>
                            เลือก <Text style={{ color: "red" }}>{this.props.count}</Text> รายการ
                        </Text>

                        <IconButton
                            icon="delete"
                            color="#FF0000"
                            size={50}

                            onPress={() => this.props.dispatch(dispatchCategories(DELETE_CATEGORY, { value: this.props.basketChecked, key: "null" }))}
                        />
                        <IconButton
                            icon="close-circle-outline"
                            color="black"
                            size={30}

                            onPress={() => this.props.dispatch(dispatchCategories(CLEAR_BASKET_CHECKED_CATEGORY, { value: "null", key: "null" }))}
                        />

                    </View>
                }

                {this.props.route.name == "UnitAddScreen" &&
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <Text>
                            เลือก <Text style={{ color: "red" }}>{this.props.count}</Text> รายการ
                        </Text>

                        <IconButton
                            icon="delete"
                            color="#FF0000"
                            size={50}

                            onPress={() => this.props.dispatch(dispatchProducts(DELETE_UNIT, { value: this.props.basketChecked, key: "null" }))}
                        />
                        <IconButton
                            icon="close-circle-outline"
                            color="black"
                            size={30}

                            onPress={() => this.props.dispatch(dispatchProducts(CLEAR_BASKET_CHECKED_UNIT, { value: "null", key: "null" }))}
                        />

                    </View>
                }
            </View>

        )
    }
}