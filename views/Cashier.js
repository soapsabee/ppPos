import React from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import { container, button, input, panel, numberbill, text } from '../styles/components/'
export default class Home extends React.Component {

  render() {
    return (
      <View style={container.defaultGround}>

        <View>
          <Text style={numberbill.textStyle}>
            เลขที่บิล xxxx-xxxx-xxxx
          </Text>
        </View>
        <View style={panel.panel_row_around}>
          <View>
            <TextInput style={input.cashierAddInput}
              label="ป้อนบาร์โค๊ด"

            />
            <TextInput style={input.cashierAddInput}
              label="จำนวน"

            />

          </View>
          <View style={panel.panel_column_around}>

            <Button style={button.btnAdd} mode="contained" onPress={() => console.log('Pressed')}>
              เพิ่มสินค้า
          </Button>

            <Button icon={require('../assets/icon/cashier/scanner.png')} style={button.btnScan} mode="contained" onPress={() => console.log('Pressed')}>
              สแกน
          </Button>

          </View>


        </View>


        <View style={panel.productTotalPanel}>
          <View style={panel.panel_column_around}>
            <View style={panel.panel_row_around}>
              <Text >
                รวม
            </Text>
              <Text style={text.textTotal}>800</Text> {/* ตรงนี้มีโอกาศ Text แสดงผลไม่ถูกต้องเมื่อจำนวนตัวเลขมี มากขึ้น */}

            </View>

            <Button style={button.btnDelete} mode="contained" onPress={() => console.log('Pressed')}>
              ยกเลิก
          </Button>

          </View>

          <View style={panel.panel_column_around}>

            <Button style={button.btnPayment} mode="contained" onPress={() => console.log('Pressed')}>
              ชำระเงินสด
          </Button>
            <Button style={button.btnPromptPay} mode="contained" onPress={() => console.log('Pressed')}>
              พร้อมเพย์
          </Button>
          </View>


        </View>




        {/* <Text style={styles.productDefaultPanel}>
            ยังไม่มีสินค้า
          </Text> */}




      </View>

    )
  }
}
