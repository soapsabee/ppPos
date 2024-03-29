import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Title, List, Divider } from 'react-native-paper'
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import { connect } from 'react-redux'
import { dispatchProducts } from '../redux/actions/'
import { IMPORT_PRODUCT_CSV, EXPORT_PRODUCT_CSV ,TABLE_CLEAR} from '../redux/actions'

export class Backup extends React.Component {



  exportProductCSV = async () => {

    this.props.dispatch(dispatchProducts(EXPORT_PRODUCT_CSV, { value: "null" , key: "null" }))

  }

  pickupDocument = async () => {

    const file = await DocumentPicker.getDocumentAsync();
    const filename = file.uri.split("/").pop()
    // let fileBase64 = await FileSystem.getInfoAsync(FileSystem.cacheDirectory+"/DocumentPicker/");
    // let directory = await FileSystem.readDirectoryAsync(FileSystem.cacheDirectory+"/DocumentPicker/")
    if(file.type == "success"){
      let read = await FileSystem.readAsStringAsync(FileSystem.cacheDirectory+"/DocumentPicker/"+filename)
      this.props.dispatch(dispatchProducts(IMPORT_PRODUCT_CSV, { value: `${read}` , key: "null" }))
    }

  }

  clearTable = async () => {
    this.props.dispatch(dispatchProducts(TABLE_CLEAR, { value: "null" , key: "null" }))

  }


  render() {

    return (
      <View>
        <List.Item
          title="ส่งออกข้อมูลสินค้า CSV"
          description="Export ข้อมูลสินค้าทั้งหมดในรูปแบบไฟล์ CSV"
          left={props => <List.Icon {...props} icon="download" />}
          onPress={() => this.exportProductCSV()}
        />
        <Divider />
        <List.Item
          title="นำเข้าข้อมูลสินค้า CSV"
          description="นำเข้าจากไฟล์ CSV โดยจะไม่บันทึกข้อมูลที่มีรหัส Barcode ซํ้า"
          left={props => <List.Icon {...props} icon="import" />}
          onPress={() => this.pickupDocument()}
        />
        <Divider />
        <List.Item
          title="ล้างข้อมูลทั้งหมด"
          description="จะทำการล้างข้อมูลทั้งหมดที่อยู่ในเครื่องนี้"
          left={props => <List.Icon {...props} icon="delete" />}
          onPress={() => this.clearTable()}
        />
        <Divider />

      </View>

    )
  }
}

const mapStateToProps = state => {

  // return state
  return  state
}

export default connect(mapStateToProps)(Backup)

