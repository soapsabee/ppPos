import React from 'react'
import { View, Text } from 'react-native'
import { Checkbox } from 'react-native-paper';
import { dispatchCategories, UPDATE_BASKET_CHECKED_CATEGORY , DELETE_BASKET_CHECKED_CATEGORY} from '../redux/actions'
import { connect } from 'react-redux'


export  class ListCategoryCheckbox extends React.Component {


    onCheckedBTN = (id) => {
        if (this.props.checked == undefined) {
            this.props.dispatch(dispatchCategories(UPDATE_BASKET_CHECKED_CATEGORY, { value: id, key: "null" }))
        } else {
            this.props.dispatch(dispatchCategories(DELETE_BASKET_CHECKED_CATEGORY, { value: id, key: "null" }))

        }


    }

    render() {
        const { categoryID, name } = this.props.item

        return (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Checkbox status={this.props.checked ? 'checked' : 'unchecked'} onPress={() => this.onCheckedBTN(categoryID)} />
                <Text>{name}</Text>
            </View>
        )
    }

}


const mapStateToProps = state => {

    // return state
    return state  
  }
  
  export default connect(mapStateToProps)(ListCategoryCheckbox)
  