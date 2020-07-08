import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Title, List, Divider } from 'react-native-paper'
export default class Backup extends React.Component {


  render() {

    return (
      <View>
        <List.Item
          title="ดาวน์โหลดข้อมูล CSV"
          description="ประกอบด้วยรายงานการขายทั้งหมด และ ข้อมูลสินค้า"
          left={props => <List.Icon {...props} icon="download" />}
        />
        <Divider />
        <List.Item
          title="นำเข้าข้อมูล CSV"
          description="นำเข้าจากไฟล์ CSV"
          left={props => <List.Icon {...props} icon="import" />}
        />
        <Divider />
        <List.Item
          title="ล้างข้อมูลทั้งหมด"
          description="จะทำการล้างข้อมูลทั้งหมดที่อยู่ในเครื่องนี้"
          left={props => <List.Icon {...props} icon="delete" />}
        />
        <Divider />

      </View>

    )
  }
}

