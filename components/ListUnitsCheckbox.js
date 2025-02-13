import React from 'react';
import { View, Text } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchUnits, UPDATE_BASKET_CHECKED_UNITS, DELETE_BASKET_CHECKED_UNITS } from '../redux/actions';

const ListUnitsCheckbox = ({ item , checked}) => {
    const dispatch = useDispatch();
    const onCheckedBTN = (id) => {
        if (checked === undefined) {
            dispatch(dispatchUnits(UPDATE_BASKET_CHECKED_UNITS, { value: id, key: "null" }));
        } else {
            dispatch(dispatchUnits(DELETE_BASKET_CHECKED_UNITS, { value: id, key: "null" }));
        }
    };

    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => onCheckedBTN(item.unitID)} />
            <Text>{item.name}</Text>
        </View>
    );
};

export default ListUnitsCheckbox;

  