import React from 'react'
import { View, Text, Picker, ScrollView, Alert } from 'react-native'
import { Searchbar } from 'react-native-paper';
import ToolsProducts from '../components/ToolsProducts'
import CardProducts from '../components/CardProducts'
import { connect } from 'react-redux'
import { dispatchProducts } from '../redux/actions/'
import { FETCH_PRODUCT, SET_PRODUCTS } from '../redux/actions'

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
    const { products } = this.props
    // console.log("products:",products.products)
    // products.products.map((value)=>{

    //   console.log("state:",value)

    // })
    return (

      <View style={{ flex: 1, flexDirection: "column", padding: 20 }}>
        <Searchbar
          placeholder="ค้นหาสินค้า"
          value={this.state.search}
          onChangeText={(search) => this.setState({ search })}
        />

        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Picker style={{ width: 150 }} selectedValue={this.state.user} onValueChange={this.updateUser}>
            <Picker.Item label="แสดงทั้งหมด" value="steve" />
            <Picker.Item label="Ellen" value="ellen" />
            <Picker.Item label="Maria" value="maria" />
          </Picker>
        </View>

        < ScrollView >
          {products.products && products.products.map((value,i)=> <CardProducts key={i} card={value} /> )}
      
      


        </ScrollView >

        <ToolsProducts navigation={this.props.navigation} />
      </View>





    )

  }
}


const mapStateToProps = state => {

  // return state
  return {
    products: state.products
  }

}

export default connect(mapStateToProps)(Products)