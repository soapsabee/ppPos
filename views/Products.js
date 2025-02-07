import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import ToolsProducts from '../components/ToolsProducts';
import ToolAddProducts from '../components/ToolAddProducts';
import ToolDeleteProducts from '../components/ToolDeleteProducts';
import CardProducts from '../components/CardProducts';
import { connect } from 'react-redux';
import { dispatchProducts } from '../redux/actions/';
import { FETCH_PRODUCT, SET_PRODUCTS, SEARCH_PRODUCT, SORT_PRODUCT } from '../redux/actions';

const Products = ({ 
  products, 
  basketCheckedLength, 
  basketChecked, 
  sortProducts, 
  categories, 
  dispatch, 
  navigation 
}) => {
  
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(dispatchProducts(FETCH_PRODUCT, { value: "null", key: "null" }));
  }, [dispatch]);

  const handleSearch = (searchText) => {
    setSearch(searchText);
    dispatch(dispatchProducts(SEARCH_PRODUCT, { value: searchText, key: "searchInput" }));
  };

  const handleSortChange = (sort) => {
    dispatch(dispatchProducts(SORT_PRODUCT, { value: sort, key: "sortProducts" }));
  };

  return (
    <View style={{ flex: 1, flexDirection: "column", padding: 20 }}>
      <Searchbar
        placeholder="ค้นหาสินค้า"
        value={search}
        onChangeText={handleSearch}
      />

      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Picker style={{ width: 150 }} selectedValue={sortProducts} onValueChange={handleSortChange}>
          <Picker.Item label="แสดงทั้งหมด" value="" />
          {categories && categories.map((value) => 
            <Picker.Item key={value.categoryID} label={value.name} value={value.categoryID} />
          )}
        </Picker>
      </View>

      <ScrollView>
        {products.products && products.products.map((value, i) => 
          <CardProducts key={i} card={value} checked={basketChecked.find(element => element.id == value.id)} />
        )}
      </ScrollView>

      {basketCheckedLength > 0 ? <ToolDeleteProducts count={basketCheckedLength} {...{ dispatch, basketChecked, navigation }} /> : <ToolAddProducts navigation={navigation} />}
    </View>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
  basketCheckedLength: state.products.basketChecked.length,
  basketChecked: state.products.basketChecked,
  sortProducts: state.products.sortProducts,
  categories: state.categories.categories,
});

export default connect(mapStateToProps)(Products);
