import React from 'react'
import AddTypeProduct from '../components/AddTypeProduct'
import ListCategoryCheckbox from '../components/ListCategoryCheckbox'
import { View, Text,ScrollView } from 'react-native'
import { Searchbar, TextInput, IconButton, Checkbox } from 'react-native-paper';
import { connect } from 'react-redux'
import { dispatchCategories , INSERT_NEW_CATEGORY , FETCH_CATEGORYS , SET_HANDLEINPUTCATEGORY , SEARCH_CATEGORY  } from '../redux/actions/'
import ToolDeleteProducts from '../components/ToolDeleteProducts'

export  class CategoryAdd extends React.Component {


  state = {

    search: ''
  }

  componentDidMount = () => {
    this.props.dispatch(dispatchCategories(FETCH_CATEGORYS, { value: "null", key: "null" }))
  }

  render() {
    const { basketChecked ,category , basketCheckedLength } = this.props
    return (

    
        // <AddTypeProduct TypeAdd={"หมวดหมู่สินค้า"}/>

        <View style={{ flex:1, padding: 20 , flexDirection: "column" }} >

        <Searchbar
          placeholder={`ค้นหาหมวดหมู่สินค้า`}
          onChangeText={(search) => this.props.dispatch(dispatchCategories(SEARCH_CATEGORY, { value: search , key: "searchInput" }))}
        />

        <View style={{ flexDirection: "row" }}>
          <TextInput
            label={`ป้อนชื่อหมวดหมู่สินค้า`}
            style={{ flex: 1, backgroundColor: "transparent" }}
            onChangeText={(value) => this.props.dispatch(dispatchCategories(SET_HANDLEINPUTCATEGORY, { value: value , key: "handleInputName" })) }
          />
          <IconButton
            icon="plus-box"
            color="#6ACA6B"
            size={40}
            onPress={() => this.props.dispatch(dispatchCategories(INSERT_NEW_CATEGORY, { value: this.props.handleInputName , key: null }))}
          />
        </View>


        < ScrollView >
          { category && category.map((value,id)=> <ListCategoryCheckbox item={value} key={id} checked={basketChecked.find(element => element.categoryID == value.categoryID)} /> )}
          
        </ScrollView >
        <View style={{alignItems:"flex-end"}}>

          {/* <ToolDeleteProducts /> */}
          {basketCheckedLength > 0 && <ToolDeleteProducts count={basketCheckedLength}  {...this.props} />  }

        </View>

      </View>
    
    )
  }
}


const mapStateToProps = state => {

  // return state
  return {
    handleInputName: state.categories.handleInputName,
    category: state.categories.categories,
    basketChecked : state.categories.basketChecked,
    basketCheckedLength: state.categories.basketChecked.length
  }

}

export default connect(mapStateToProps)(CategoryAdd)
