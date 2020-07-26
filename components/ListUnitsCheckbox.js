import React from 'react'
import { View, Text } from 'react-native'
import { Checkbox } from 'react-native-paper';
import { dispatchUnits, UPDATE_BASKET_CHECKED_UNITS , DELETE_BASKET_CHECKED_UNITS} from '../redux/actions'
import { connect } from 'react-redux'


export  class ListUnitsCheckbox extends React.Component {


    onCheckedBTN = (id) => {
        if (this.props.checked == undefined) {
            this.props.dispatch(dispatchUnits(UPDATE_BASKET_CHECKED_UNITS, { value: id, key: "null" }))
        } else {
            this.props.dispatch(dispatchUnits(DELETE_BASKET_CHECKED_UNITS, { value: id, key: "null" }))

        }


    }

    render() {
        const { unitID, name } = this.props.item

        return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Checkbox status={this.props.checked ? 'checked' : 'unchecked'} onPress={() => this.onCheckedBTN(unitID)}  />
                <Text>{name}</Text>
            </View>
        )
    }

}


const mapStateToProps = state => {

    // return state
    return state  
  }
  
  export default connect(mapStateToProps)(ListUnitsCheckbox)
  