import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { container, panel, text } from '../styles/components/';
import PaymentPanel from '../components/PaymentPanel';
import DeleteBasketProduct from '../components/DeleteBasketProduct';
import NumberBill from '../components/NumberBill';
import AddProduct from '../components/AddProduct';
import CardCashier from '../components/CardCashier';
import { useDispatch, useSelector } from 'react-redux';

const Cashier = ({ navigation }) => {
  const dispatch = useDispatch();

  const cashier = useSelector(state => state.products.cashier);
  const cashierChecked = useSelector(state => state.products.cashierChecked);
  const cashierInputProducts = useSelector(state => state.products.cashierInputProducts);

  return (
    <View style={{ flex: 1 }}>
      <NumberBill />
      <AddProduct dispatch={dispatch} navigation={navigation} cashierInputProducts={cashierInputProducts} />

      {cashier.length > 0 && cashierChecked.length === 0 && (
        <PaymentPanel navigation={navigation} {...{ cashier, cashierChecked }} />
      )}

      {cashierChecked.length > 0 && (
        <DeleteBasketProduct dispatch={dispatch} cashierChecked={cashierChecked} />
      )}

      <View style={text.headerListProduct}>
        <Text>รายการสินค้า</Text>
        <Text style={text.textTotal}>{cashier.length}</Text>
        <Text>รายการ</Text>
      </View>

      <ScrollView>
        {cashier.map((value, id) => (
          <CardCashier
            key={id}
            value={value}
            checked={cashierChecked.find(element => element.id === id)}
            dispatch={dispatch}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Cashier;