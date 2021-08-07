import React from 'react'
import { View, Text, Image } from 'react-native'
import { Button } from 'react-native-paper';
import { container } from '../styles/components'
import DialogEditPromptPay from '../components/DialogEditPromptPay'
import { connect } from 'react-redux'
import { dispatchProducts, SET_KEY, FETCH_PROMPTPAY } from '../redux/actions/'
import generatePayload from 'promptpay-qr'
import SvgQRCode from 'react-native-qrcode-svg';



export class PromptPay extends React.Component {

    componentDidMount = () => {
        this.props.dispatch(dispatchProducts(FETCH_PROMPTPAY, { value: "null", key: "null" }))

    }

    setShowDialogEdit = () => {
        this.props.dispatch(dispatchProducts(SET_KEY, { value: true, key: "diaglogEditPromptPay" }))
    }


    render() {

        const { diaglogEditPromptPay, promptpayNumber, totalCashier } = this.props
        const mobileNumber = promptpayNumber
        const amount = totalCashier
        const payload = generatePayload(mobileNumber, { amount })
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
                        <SvgQRCode value={payload} />

                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                        <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                            <Text>รหัสพร้อมเพย์:</Text>
                            {this.props.path == "PromptPayCashier" &&
                                <Text>ราคาทั้งหมด:</Text>
                            }
                        </View>
                        <View style={{ flexDirection: "column", marginLeft: 10 }}>
                            <Text>{promptpayNumber != "null" ? promptpayNumber : "ยังไม่ได้ระบุรหัสพร้อมเพย์"}</Text>
                            {this.props.path == "PromptPayCashier" &&
                                <Text>{totalCashier}</Text>
                            }
                        </View>


                    </View>

                </View>
                {this.props.path == "PromptPayCashier" &&
                    <Button style={{ position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: "#6ACA6B" }} contentStyle={{ height: 60 }} mode="contained" onPress={() => this.props.navigation.navigate('ConfirmPayment')}>
                        ยืนยันการชำระเงิน
                    </Button>
                }

                {this.props.path == "PromptPaySetting" &&
                    <Button style={{ position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: "#008CBA" }} contentStyle={{ height: 60 }} mode="contained" onPress={() => this.setShowDialogEdit()}>
                        แก้ไข
                    </Button>
                }

                <DialogEditPromptPay visible={diaglogEditPromptPay} dispatch={this.props.dispatch} />
            </View>
        )
    }

}

const mapStateToProps = state => {

    // return state
    return {
        diaglogEditPromptPay: state.products.diaglogEditPromptPay,
        promptpayNumber: state.products.promptpayNumber,
        totalCashier: state.products.totalCashier,

    }
}

export default connect(mapStateToProps)(PromptPay)
