import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper';

export default class Home extends React.Component {


  render() {

    return (
      <View style={styles.container}>

        <View>
          <Text style={styles.textbill}>
            เลขที่บิล xxxx-xxxx-xxxx
          </Text>
        </View>
        <View style={styles.addPanelInput}>
          <View>
            <TextInput style={styles.input}
              label="ป้อนบาร์โค๊ด"

            />
            <TextInput style={styles.input}
              label="จำนวน"

            />

          </View>
          <View style={styles.addPanelButton}>

            <Button style={styles.btnProductAdd} mode="contained" onPress={() => console.log('Pressed')}>
              เพิ่มสินค้า
          </Button>
          
          <Button icon={require('../assets/icon/cashier/scanner.png')} style={styles.btnProductScan} mode="contained" onPress={() => console.log('Pressed')}>
              สแกน
          </Button>

          </View>

        </View>

        <View style={styles.productPanel}>

          <Text style={styles.productDefaultPanel}>
            ยังไม่มีสินค้า
          </Text>

        </View>


      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  textbill: {
    fontSize: 12,
    marginLeft:10,
    color: '#808080'
  },
  input: {
    width: 220,
    height: 50,
  
    backgroundColor: 'white'
  },
  addPanelInput: {
    flexDirection: "row",
    justifyContent: 'space-around'
  },
  addPanelButton: {
    flexDirection: "column",
    justifyContent: 'space-around',
    

  },
  btnProductAdd : {
   backgroundColor: "#6ACA6B"
  },
  btnProductScan : {
    backgroundColor : "#FD6721"
  },
  productPanel : {
    flex: 1,
    flexDirection: "column",
    justifyContent:"center"
    
  },
  productDefaultPanel : {
    textAlign:"center",
  }


});