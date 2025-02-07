import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Searchbar, TextInput, IconButton } from 'react-native-paper';
import { connect } from 'react-redux';
import { 
  dispatchCategories, 
  INSERT_NEW_CATEGORY, 
  FETCH_CATEGORYS, 
  SET_HANDLEINPUTCATEGORY, 
  SEARCH_CATEGORY 
} from '../redux/actions/';
import ListCategoryCheckbox from '../components/ListCategoryCheckbox';
import ToolDeleteProducts from '../components/ToolDeleteProducts';

const CategoryAdd = ({ 
  basketChecked, 
  category, 
  basketCheckedLength, 
  handleInputName, 
  dispatch 
}) => {
  
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(dispatchCategories(FETCH_CATEGORYS, { value: "null", key: "null" }));
  }, [dispatch]);

  const handleSearchChange = (searchInput) => {
    setSearch(searchInput);
    dispatch(dispatchCategories(SEARCH_CATEGORY, { value: searchInput, key: "searchInput" }));
  };

  const handleCategoryNameChange = (value) => {
    dispatch(dispatchCategories(SET_HANDLEINPUTCATEGORY, { value, key: "handleInputName" }));
  };

  const handleAddCategory = () => {
    dispatch(dispatchCategories(INSERT_NEW_CATEGORY, { value: handleInputName, key: null }));
  };

  return (
    <View style={{ flex: 1, padding: 20, flexDirection: "column" }}>
      <Searchbar
        placeholder="ค้นหาหมวดหมู่สินค้า"
        value={search}
        onChangeText={handleSearchChange}
      />

      <View style={{ flexDirection: "row" }}>
        <TextInput
          label="ป้อนชื่อหมวดหมู่สินค้า"
          style={{ flex: 1, backgroundColor: "transparent" }}
          onChangeText={handleCategoryNameChange}
        />
        <IconButton
          icon="plus-box"
          color="#6ACA6B"
          size={40}
          onPress={handleAddCategory}
        />
      </View>

      <ScrollView>
        {category && category.map((value, id) => (
          <ListCategoryCheckbox 
            item={value} 
            key={id} 
            checked={basketChecked.find(element => element.categoryID === value.categoryID)} 
          />
        ))}
      </ScrollView>

      <View style={{ alignItems: "flex-end" }}>
        {basketCheckedLength > 0 && <ToolDeleteProducts count={basketCheckedLength} {...{ basketChecked, dispatch }} />}
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  handleInputName: state.categories.handleInputName,
  category: state.categories.categories,
  basketChecked: state.categories.basketChecked,
  basketCheckedLength: state.categories.basketChecked.length,
});

export default connect(mapStateToProps)(CategoryAdd);

