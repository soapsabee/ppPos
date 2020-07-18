import React from 'react'
import { View, Text, Image, Picker, ScrollView } from 'react-native'
import { IconButton, TextInput, Switch, Button } from 'react-native-paper';
import { connect } from 'react-redux'
import { dispatchProducts, dispatchCategories, SET_HANDLEINPUTPRODUCTS, INSERT_NEW_PRODUCT, FETCH_CATEGORIES_MERGE_UNITS } from '../redux/actions/'
import * as ImagePicker from 'expo-image-picker';



export class AddProduct extends React.Component {

    state = {
        user: '',
    }
    updateUser = (user) => {
        this.setState({ user: user })
    }

    convertStatus = (value) => {

        if (value == 0) {
            return false
        } else {
            return true
        }

    }

    _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
                base64: true
            });
            if (!result.cancelled) {
                this.props.dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value: result.uri, key: "imageURI" }))
            }

            console.log(result);
        } catch (E) {
            console.log(E);
        }
    }

    componentDidMount = () => {

        this.props.dispatch(dispatchCategories(FETCH_CATEGORIES_MERGE_UNITS, { value: null, key: null }))

    }


    render() {
        const { handleInputProducts, categories , units} = this.props
        console.log("categories", categories)
        return (
            < ScrollView >
                <View style={{ flexDirection: "column", alignItems: "center" }}>


                    <Image style={{
                        borderStyle: "solid", borderWidth: 1, marginTop: 30, borderColor: "#D9D9D9",
                        width: 150,
                        height: 150,
                        resizeMode: 'contain',
                        justifyContent: "center"
                    }} source={{ uri: handleInputProducts.imageURI }} />

                    <IconButton
                        icon="image"
                        color="#3366CC"
                        size={30}

                        onPress={this._pickImage}
                    />

                </View>
                {/* this.props.dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value: value, key: "name" })) */}
                <View style={{ padding: 40, flexDirection: "column" }}>
                    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                        <Text>พร้อมขาย :</Text>
                        <Switch value={this.convertStatus(handleInputProducts.status)} onValueChange={() => this.props.dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value: this.convertStatus(handleInputProducts.status) == false ? true : false, key: "status" }))} />
                    </View>

                    <TextInput
                        label="ชื่อสินค้า"
                        style={{ backgroundColor: "transparent" }}
                        onChangeText={(value) => this.props.dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value: value, key: "name" }))}
                    />
                    <Picker selectedValue={handleInputProducts.unit} onValueChange={(value) => this.props.dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value: value, key: "unit" }))}>
                        <Picker.Item label="หน่วยสินค้า" value="หน่วยสินค้า" />
                        {units && units.map((value) => 
                            <Picker.Item label={value.name} value={value.unitID}/>
                        )}
                    </Picker>
                    <Picker selectedValue={handleInputProducts.categoryID} onValueChange={(value) => this.props.dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value: value, key: "categoryID" }))}>
                        <Picker.Item label="หมวดหมู่" value="หมวดหมู่" />
                        {categories && categories.map((value) => 
                            <Picker.Item label={value.name} value={value.categoryID}/>
                        )}
                    </Picker>

                    <TextInput
                        label="ราคา"
                        keyboardType='numeric'

                        style={{ backgroundColor: "transparent" }}
                        onChangeText={(value) => this.props.dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value: value, key: "price" }))}

                    />

                    <TextInput
                        label="ต้นทุน"
                        keyboardType='numeric'
                        style={{ backgroundColor: "transparent" }}
                        onChangeText={(value) => this.props.dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value: value, key: "cost" }))}

                    />

                    <TextInput
                        label="จำนวนในคลัง"
                        keyboardType='numeric'
                        style={{ backgroundColor: "transparent" }}
                        onChangeText={(value) => this.props.dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value: value, key: "quantity" }))}

                    />
                    <View style={{ flexDirection: "row" }}>
                        <TextInput
                            label="บาร์โค๊ด"
                            style={{ flex: 1, backgroundColor: "transparent" }}
                            onChangeText={(value) => this.props.dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value: value, key: "barcode" }))}

                        />
                        <IconButton
                            icon={require('../assets/icon/cashier/scanner.png')}
                            color="#3366CC"
                            size={30}

                            onPress={() => this.props.navigation.navigate('BarCodeScannerProduct')}
                        />
                    </View>

                    <TextInput
                        label="รายละเอียด"
                        multiline={true}
                        underlineColorAndroid='transparent'
                        style={{ height: 100, backgroundColor: "transparent" }}
                        onChangeText={(value) => this.props.dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value: value, key: "detail" }))}

                    />

                </View>
                <Button style={{ position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: "#6ACA6B" }} contentStyle={{ height: 60 }} mode="contained" onPress={() => this.props.dispatch(dispatchProducts(INSERT_NEW_PRODUCT, { value: handleInputProducts, key: null }))}>
                    เพิ่มสินค้า
                 </Button>


            </ScrollView >


        )
    }


}

const mapStateToProps = state => {

    // return state
    return {
        handleInputProducts: state.products.handleInputProducts,
        categories: state.categories.categories,
        units: state.units.units
    }

}

export default connect(mapStateToProps)(AddProduct)