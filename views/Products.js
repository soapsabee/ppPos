import React from 'react'
import { View, Text, ScrollView, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import { Searchbar } from 'react-native-paper';
import ToolsProducts from '../components/ToolsProducts'
import ToolAddProducts from '../components/ToolAddProducts'
import ToolDeleteProducts from '../components/ToolDeleteProducts'

import CardProducts from '../components/CardProducts'
import { connect } from 'react-redux'
import { dispatchProducts } from '../redux/actions/'
import { FETCH_PRODUCT, SET_PRODUCTS , SEARCH_PRODUCT, SORT_PRODUCT} from '../redux/actions'

export class Products extends React.Component {

  state = {
    user: '',
    search: ''
  }
  updateUser = (user) => {
    this.setState({ user: user })
  }



  componentDidMount = async () => {

    const products = this.props.dispatch(dispatchProducts(FETCH_PRODUCT, { value: "null", key: "null" }))
  }

  render() {
    const { products, basketCheckedLength, basketChecked , sortProducts , categories } = this.props
    console.log("count:", basketCheckedLength
    );
    // console.log("products:",products.products)
    // products.products.map((value)=>{

    //   console.log("state:",value)

    // })
    return (

      <View style={{ flex: 1, flexDirection: "column", padding: 20 }}>
        <Searchbar
          placeholder="ค้นหาสินค้า"
          onChangeText={(search) => this.props.dispatch(dispatchProducts(SEARCH_PRODUCT, { value: search , key: "searchInput" }))}
        />

        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Picker style={{ width: 150 }} selectedValue={sortProducts} onValueChange={(sort) => this.props.dispatch(dispatchProducts(SORT_PRODUCT, { value: sort , key: "sortProducts" }))}>
            <Picker.Item label="แสดงทั้งหมด" value="" />
            {categories && categories.map((value) =>
              <Picker.Item label={value.name} value={value.categoryID} />
            )}
          </Picker>
        </View>

        < ScrollView >
          {products.products && products.products.map((value, i) => <CardProducts key={i} card={value} checked={basketChecked.find(element => element.id == value.id)} />)}




        </ScrollView >
        {basketCheckedLength > 0 ? <ToolDeleteProducts count={basketCheckedLength}  {...this.props} /> : <ToolAddProducts navigation={this.props.navigation} />}

      </View>





    )

  }
}


const mapStateToProps = state => {

  // return state
  return {
    products: state.products,
    basketCheckedLength: state.products.basketChecked.length,
    basketChecked: state.products.basketChecked,
    sortProducts: state.products.sortProducts,
    categories: state.categories.categories
  }

}

export default connect(mapStateToProps)(Products)