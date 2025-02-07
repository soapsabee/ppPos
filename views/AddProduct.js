import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { IconButton, TextInput, Switch, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import DialogAlertAddProduct from '../components/DialogAlertAddProduct';
import defaultNoImage from '../assets/defaultNoImage.jpg';
import scannerIcon from '../assets/icon/cashier/scanner.png';
import { 
  dispatchProducts, 
  dispatchCategories, 
  SET_HANDLEINPUTPRODUCTS, 
  INSERT_NEW_PRODUCT, 
  FETCH_CATEGORIES_MERGE_UNITS 
} from '../redux/actions/';

const AddProduct = ({ navigation }) => {
  const [user, setUser] = useState('');
  const dispatch = useDispatch();

  const handleInputProducts = useSelector(state => state.products.handleInputProducts);
  const categories = useSelector(state => state.categories.categories);
  const units = useSelector(state => state.units.units);
  const errorField = useSelector(state => state.products.errorField);
  const dialogAlertAddProduct = useSelector(state => state.products.dialogAlertAddProduct);
  const duplicateAddName = useSelector(state => state.products.duplicateAddName);
  const duplicateBarcode = useSelector(state => state.products.duplicateBarcode);

  useEffect(() => {
    dispatch(dispatchCategories(FETCH_CATEGORIES_MERGE_UNITS, { value: null, key: null }));
  }, [dispatch]);

  const convertStatus = value => value === 0 ? false : true;

  const validName = () => {
    let label = "ชื่อสินค้า";
    if (errorField.name) {
      label = duplicateAddName ? "ชื่อสินค้า (ห้ามซํ้า)" : "ชื่อสินค้า (ห้ามเว้นว่าง)";
    }
    return label;
  };

  const validBarcode = () => {
    let label = "บาร์โค๊ด";
    if (errorField.barcode) {
      label = duplicateBarcode ? "บาร์โค๊ด (ห้ามซํ้า)" : "บาร์โค๊ด (ห้ามเว้นว่าง)";
    }
    return label;
  };

  const _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true
      });
      if (!result.cancelled) {
        dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value: result.uri, key: "imageURI" }));
      }
    } catch (E) {
      console.log(E);
    }
  };

  return (
    <ScrollView>
      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ width: 150, height: 150, resizeMode: 'contain' }}
          source={handleInputProducts.imageURI === "" ? defaultNoImage : { uri: handleInputProducts.imageURI }}
        />
        <IconButton
          icon="image"
          color="#3366CC"
          size={30}
          onPress={_pickImage}
        />
      </View>

      <View style={{ padding: 40, flexDirection: "column" }}>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Text>พร้อมขาย :</Text>
          <Switch
            value={convertStatus(handleInputProducts.status)}
            onValueChange={() => dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value: !convertStatus(handleInputProducts.status), key: "status" }))}
          />
        </View>

        <TextInput
          label={validName()}
          style={{ backgroundColor: "transparent" }}
          error={errorField.name}
          onChangeText={(value) => dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value, key: "name" }))}
          value={handleInputProducts.name}
        />

        <Picker
          selectedValue={handleInputProducts.unitID}
          onValueChange={(value) => dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value, key: "unitID" }))}
        >
          <Picker.Item label="หน่วยสินค้า" value="หน่วยสินค้า" />
          {units && units.map((value) => (
            <Picker.Item key={value.unitID} label={value.name} value={value.unitID} />
          ))}
        </Picker>

        <Picker
          selectedValue={handleInputProducts.categoryID}
          onValueChange={(value) => dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value, key: "categoryID" }))}
        >
          <Picker.Item label="หมวดหมู่" value="หมวดหมู่" />
          {categories && categories.map((value) => (
            <Picker.Item key={value.categoryID} label={value.name} value={value.categoryID} />
          ))}
        </Picker>

        <TextInput
          label={errorField.price ? "ราคา (ห้ามเว้นว่าง)" : "ราคา"}
          keyboardType="numeric"
          error={errorField.price}
          style={{ backgroundColor: "transparent" }}
          onChangeText={(value) => dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value, key: "price" }))}
          value={handleInputProducts.price}
        />

        <TextInput
          label={errorField.cost ? "ต้นทุน (ห้ามว่าง)" : "ต้นทุน"}
          error={errorField.cost}
          keyboardType="numeric"
          style={{ backgroundColor: "transparent" }}
          onChangeText={(value) => dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value, key: "cost" }))}
          value={handleInputProducts.cost}
        />

        <TextInput
          label={errorField.quantity ? "จำนวนในคลัง (ห้ามว่าง)" : "จำนวนในคลัง"}
          error={errorField.quantity}
          keyboardType="numeric"
          style={{ backgroundColor: "transparent" }}
          onChangeText={(value) => dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value, key: "quantity" }))}
          value={handleInputProducts.quantity}
        />

        <View style={{ flexDirection: "row" }}>
          <TextInput
            label={validBarcode()}
            error={errorField.barcode}
            style={{ flex: 1, backgroundColor: "transparent" }}
            onChangeText={(value) => dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value, key: "barcode" }))}
            value={handleInputProducts.barcode}
          />
          <IconButton
            icon={scannerIcon}
            color="#3366CC"
            size={30}
            onPress={() => navigation.navigate('BarCodeScannerProduct', { routeName: 'AddProduct' })}
          />
        </View>

        <TextInput
          label="รายละเอียด"
          multiline={true}
          underlineColorAndroid="transparent"
          style={{ height: 100, backgroundColor: "transparent" }}
          onChangeText={(value) => dispatch(dispatchProducts(SET_HANDLEINPUTPRODUCTS, { value, key: "detail" }))}
          value={handleInputProducts.detail}
        />
      </View>

      <Button
        style={{ position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: "#6ACA6B" }}
        contentStyle={{ height: 60 }}
        mode="contained"
        onPress={() => dispatch(dispatchProducts(INSERT_NEW_PRODUCT, { value: handleInputProducts, key: null }))}
      >
        เพิ่มสินค้า
      </Button>

      <DialogAlertAddProduct visible={dialogAlertAddProduct} dispatch={dispatch} detail="กรุณากรอกข้อมูลให้ครบถ้วน" />
    </ScrollView>
  );
};

export default AddProduct;
