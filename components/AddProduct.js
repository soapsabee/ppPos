import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { button, input, panel } from '../styles/components/';
import { dispatchProducts, SET_HANDLE_INPUT_CASHIER, ADD_BASKET_CASHIER_MANUAL } from '../redux/actions/';
import scannerIcon from '../assets/icon/cashier/scanner.png';
import { useDispatch, useSelector } from 'react-redux';

const AddProduct = ({ navigation }) => {
  const dispatch = useDispatch();
  const cashierInputProducts = useSelector(state => state.products.cashierInputProducts);

  const handleChange = (key, value) => {
    dispatch(dispatchProducts(SET_HANDLE_INPUT_CASHIER, { value, key }));
  };

  const handleAddProduct = () => {
    dispatch(dispatchProducts(ADD_BASKET_CASHIER_MANUAL, { value: cashierInputProducts, key: "number" }));
  };

  return (
    <View style={panel.panel_row_around}>
      <View>
        <TextInput
          style={input.cashierAddInput}
          label="ป้อนบาร์โค๊ด"
          onChangeText={(value) => handleChange('barcode', value)}
          value={cashierInputProducts.barcode}
        />
        <TextInput
          style={input.cashierAddInput}
          label="จำนวน"
          onChangeText={(value) => handleChange('number', value)}
          value={cashierInputProducts.number}
        />
      </View>
      <View style={panel.panel_column_around}>
        <Button style={button.btnAdd} mode="contained" onPress={handleAddProduct}>
          เพิ่มสินค้า
        </Button>
        <Button icon={scannerIcon} style={button.btnScan} mode="contained" onPress={() => navigation.navigate('BarCodeScannerProduct', { routeName: 'Cashier' })}>
          สแกน
        </Button>
      </View>
    </View>
  );
};

export default AddProduct;
