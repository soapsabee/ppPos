import React from 'react'
import { View, Text, Picker, ScrollView, Alert } from 'react-native'
import { Searchbar ,Card, Avatar, Checkbox, Divider } from 'react-native-paper';
import ToolsProducts from '../components/ToolsProducts'
import CardProducts from '../components/CardProducts'

export default class Products extends React.Component {

  state = {
    user: '',
    search: ''
  }
  updateUser = (user) => {
    this.setState({ user: user })
  }


  render() {
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
            <CardProducts />
        </ScrollView >

        <ToolsProducts navigation = {this.props.navigation} />
      </View>





    )

  }
}

