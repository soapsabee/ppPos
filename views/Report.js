import React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Title, List ,Divider } from 'react-native-paper'
export default class Report extends React.Component {


  render() {

    return (
      <View style={{ flexDirection: "column" }}>
        <View style={{ height: 100, padding: 25, backgroundColor: "#6ACA6B", flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ justifyContent: "center" }}>
            <Title style={{ color: "#fff" }}>
              ยอดขายวันนี้
          </Title>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Title style={{ color: "#fff" }}>
              2,450.00

            </Title>
            <Text style={{ color: "#fff" }}>
              กำไร: 392.00
            </Text>
          </View>

        </View>

        <List.Item
          title="สรุปยอดขายรายวัน"
          description="ระบุจาก วัน/เดือน/ปี"
          left={props => <List.Icon {...props} icon="folder" />}
          onPress={() => this.props.navigation.navigate('DailyReports')}
        />
            <Divider />


        <List.Item
          title="สรุปยอดขายรายเดือน"
          description="ระบุจาก เดือน/ปี"
          left={props => <List.Icon {...props} icon="folder" />}
          onPress={() => this.props.navigation.navigate('MonthlyReports')}
        />
            <Divider />

      </View>

    )
  }
}

