import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'react-native-paper';
import { container } from '../styles/components'



export default class PromptPayCashier extends React.Component {

    render() {
        console.log("props ",this.props)
        return (
            <View style={container.defaultGround}>
                <View style={{ flexDirection: "column", flex: 0.8, justifyContent: "space-around", alignItems: "center" }}>

                    <View>
                        <Image style={{
                            width: 230,
                            height: 130,
                            resizeMode: 'stretch'
                        }} source={require('../assets/promptPay.png')} />
                    </View>

                    <View>
                        <Image style={{
                            width: 240,
                            height: 250,
                            resizeMode: 'stretch'
                        }} source={require('../assets/qr_code.png')} />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start"  }}>
                        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                            <Text>รหัสพร้อมเพย์:</Text>
                            <Text>ราคาทั้งหมด:</Text>
                        </View>
                        <View style={{ flexDirection: "column", marginLeft:10 }}>
                            <Text>0620531717</Text>
                            <Text>2,500</Text>
                        </View>


                    </View>

                </View>

                <Button style={{ position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: "#6ACA6B" }} contentStyle={{ height: 60 }} mode="contained" onPress={() => this.props.navigation.navigate('ConfirmPayment')}>
                    ยืนยันการชำระเงิน
                 </Button>

            </View>
        )
    }

}
