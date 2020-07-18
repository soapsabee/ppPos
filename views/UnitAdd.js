import React from 'react'
import ListItemCheckbox from '../components/ListItemCheckbox'
import { View, Text, ScrollView } from 'react-native'
import { Searchbar, TextInput, IconButton, Checkbox } from 'react-native-paper';
import { connect } from 'react-redux'
import { dispatchUnits, INSERT_NEW_UNIT, FETCH_UNITS, SET_HANDLEINPUTUNIT } from '../redux/actions/'
import ToolDeleteProducts from '../components/ToolDeleteProducts'

export class UnitAdd extends React.Component {

  componentDidMount = () => {
    this.props.dispatch(dispatchUnits(FETCH_UNITS, { value: "null", key: "null" }))
  }

  render() {

    return (
      <View style={{ flex: 1, padding: 20, flexDirection: "column" }} >

        <Searchbar
          placeholder={`ค้นหาหน่วยสินค้า`}
        />

        <View style={{ flexDirection: "row" }}>
          <TextInput
            label={`ป้อนชื่อหน่วยสินค้า`}
            style={{ flex: 1, backgroundColor: "transparent" }}
            onChangeText={(value) => this.props.dispatch(dispatchUnits(SET_HANDLEINPUTUNIT, { value: value, key: "handleInputName" }))}
          />
          <IconButton
            icon="plus-box"
            color="#6ACA6B"
            size={40}
            onPress={() => this.props.dispatch(dispatchUnits(INSERT_NEW_UNIT, { value: this.props.handleInputName, key: null }))}
          />
        </View>


        < ScrollView >
          {this.props.units && this.props.units.map((value) => <ListItemCheckbox name={value.name} />)}

        </ScrollView >
        <View style={{ alignItems: "flex-end" }}>

          {/* <ToolDeleteProducts /> */}

        </View>

      </View>

    )
  }
}

const mapStateToProps = state => {

  // return state
  return {
    handleInputName: state.units.handleInputName,
    units: state.units.units
  }

}

export default connect(mapStateToProps)(UnitAdd)

