import React, { useEffect } from 'react';
import ListUnitsCheckbox from '../components/ListUnitsCheckbox';
import { View, Text, ScrollView } from 'react-native';
import { Searchbar, TextInput, IconButton, Checkbox } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchUnits, INSERT_NEW_UNIT, FETCH_UNITS, SET_HANDLEINPUTUNIT, SEARCH_UNIT } from '../redux/actions/';
import ToolDeleteProducts from '../components/ToolDeleteProducts';

const UnitAdd = ({ route }) => {
  const dispatch = useDispatch();

  const handleInputName = useSelector(state => state.units.handleInputName);
  const units = useSelector(state => state.units.units);
  const basketChecked = useSelector(state => state.units.basketChecked);
  const basketCheckedLength = basketChecked.length;

  console.log("basketChecked: ",basketChecked)

  useEffect(() => {
    dispatch(dispatchUnits(FETCH_UNITS, { value: "null", key: "null" }));
  }, [dispatch]);

  const handleSearch = (search) => {
    dispatch(dispatchUnits(SEARCH_UNIT, { value: search, key: "searchInput" }));
  };

  const handleInputChange = (value) => {
    dispatch(dispatchUnits(SET_HANDLEINPUTUNIT, { value: value, key: "handleInputName" }));
  };

  const handleAddUnit = () => {
    dispatch(dispatchUnits(INSERT_NEW_UNIT, { value: handleInputName, key: null }));
  };

  return (
    <View style={{ flex: 1, padding: 20, flexDirection: "column" }}>

      <Searchbar
        placeholder="ค้นหาหน่วยสินค้า"
        onChangeText={handleSearch}
      />

      <View style={{ flexDirection: "row" }}>
        <TextInput
          label="ป้อนชื่อหน่วยสินค้า"
          style={{ flex: 1, backgroundColor: "transparent" }}
          onChangeText={handleInputChange}
        />
        <IconButton
          icon="plus-box"
          color="#6ACA6B"
          size={40}
          onPress={handleAddUnit}
        />
      </View>

      <ScrollView>
        {units && units.map(value => (
          <ListUnitsCheckbox
            key={value.unitID}
            item={value}
            checked={basketChecked.find(element => element.unitID === value.unitID)}
          />
        ))}
      </ScrollView>

      <View style={{ alignItems: "flex-end" }}>
        {basketCheckedLength > 0 && <ToolDeleteProducts count={basketCheckedLength} basketChecked={basketChecked}/>}
      </View>

    </View>
  );
};

export default UnitAdd;

