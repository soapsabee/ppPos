import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';
import { dispatchProducts, dispatchCategories, DELETE_PRODUCT, CLEAR_BASKET_CHECKED, DELETE_CATEGORY, CLEAR_BASKET_CHECKED_CATEGORY, DELETE_UNIT, CLEAR_BASKET_CHECKED_UNIT } from '../redux/actions';

const ToolDeleteProducts = ({ count, basketChecked }) => {
    const dispatch = useDispatch();
    const route = useRoute();

    return (
        <View style={{ alignItems: "flex-end" }} >
            {route.name === "Products" && (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>
                        เลือก <Text style={{ color: "red" }}>{count}</Text> รายการ
                    </Text>
                    <IconButton
                        icon="delete"
                        color="#FF0000"
                        size={50}
                        onPress={() => dispatch(dispatchProducts(DELETE_PRODUCT, { value: basketChecked, key: "null" }))}
                    />
                    <IconButton
                        icon="close-circle-outline"
                        color="black"
                        size={30}
                        onPress={() => dispatch(dispatchProducts(CLEAR_BASKET_CHECKED, { value: "null", key: "basketChecked" }))}
                    />
                </View>
            )}

            {route.name === "CategoryAdd" && (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>
                        เลือก <Text style={{ color: "red" }}>{count}</Text> รายการ
                    </Text>
                    <IconButton
                        icon="delete"
                        color="#FF0000"
                        size={50}
                        onPress={() => dispatch(dispatchCategories(DELETE_CATEGORY, { value: basketChecked, key: "null" }))}
                    />
                    <IconButton
                        icon="close-circle-outline"
                        color="black"
                        size={30}
                        onPress={() => dispatch(dispatchCategories(CLEAR_BASKET_CHECKED_CATEGORY, { value: "null", key: "null" }))}
                    />
                </View>
            )}

            {route.name === "UnitAddScreen" && (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text>
                        เลือก <Text style={{ color: "red" }}>{count}</Text> รายการ
                    </Text>
                    <IconButton
                        icon="delete"
                        color="#FF0000"
                        size={50}
                        onPress={() => dispatch(dispatchProducts(DELETE_UNIT, { value: basketChecked, key: "null" }))}
                    />
                    <IconButton
                        icon="close-circle-outline"
                        color="black"
                        size={30}
                        onPress={() => dispatch(dispatchProducts(CLEAR_BASKET_CHECKED_UNIT, { value: "null", key: "null" }))}
                    />
                </View>
            )}
        </View>
    );
};

export default ToolDeleteProducts;
