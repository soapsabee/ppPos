import React from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native'
import { Searchbar, TextInput, IconButton, Checkbox } from 'react-native-paper';
import ToolDeleteProducts from './ToolDeleteProducts'

export default class AddTypeProduct extends React.Component {


  state = {

    search: ''
  }

  render() {

    return (
      <View style={{ flex:1, padding: 20 , flexDirection: "column" }} >

        <Searchbar
          placeholder={`ค้นหา${this.props.TypeAdd}`}
          value={this.state.search}
          onChangeText={(search) => this.setState({ search })}
        />

        <View style={{ flexDirection: "row" }}>
          <TextInput
            label={`ป้อนชื่อ${this.props.TypeAdd}`}
            style={{ flex: 1, backgroundColor: "transparent" }}
            // onChangeText={() => }
          />
          <IconButton
            icon="plus-box"
            color="#6ACA6B"
            size={40}
          />
        </View>


        < ScrollView >

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Checkbox />
            <Text>อาหารแห้ง</Text>
          </View>
          
        </ScrollView >
        <View style={{alignItems:"flex-end"}}>

          {/* <ToolDeleteProducts /> */}

        </View>

      </View>

    )
  }
}
