import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Title, List, Divider,Switch } from 'react-native-paper'
export default class Report extends React.Component {


  render() {

    return (
      <View >
        <List.Item
          title="ตั้งค่าเครื่องพิมพ์"
          left={props => <List.Icon {...props} icon="printer" />}
        />
        <Divider />
        <List.Item
          title="เสียงยืนยันชำระเงิน"
          left={props => <List.Icon {...props} icon="volume-high" />}
          right={()=> <Switch  />}
        />
        <Divider />
        <List.Item
          title="ตั้งค่าพร้อมเพย์"
          left={props => <List.Icon {...props} icon="qrcode-scan" />}
          onPress={()=> this.props.navigation.navigate('PromptPaySetting')}
        />
        <Divider />
      </View>

    )
  }
}

