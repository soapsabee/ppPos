import React from 'react'
import { View, Text, Image, Picker, ScrollView } from 'react-native'
import { Avatar, Divider, IconButton, TextInput, Switch , Button } from 'react-native-paper';



export default class AddProduct extends React.Component {

    state = {
        user: '',
    }
    updateUser = (user) => {
        this.setState({ user: user })
    }

    render() {

        return (
            < ScrollView >
                <View style={{ flexDirection: "column", alignItems: "center" }}>


                    <Image style={{
                        borderStyle: "solid", borderWidth: 1, marginTop: 30, borderColor: "#D9D9D9",
                        width: 150,
                        height: 150,
                        resizeMode: 'contain',
                        justifyContent: "center"
                    }} source={require('../assets/ppposLogo.png')} />

                    <IconButton
                        icon="image"
                        color="#3366CC"
                        size={30}

                        onPress={() => this.props.navigation.navigate('AddProduct')}
                    />

                </View>

                <View style={{ padding: 40, flexDirection: "column" }}>
                    <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                        <Text>พร้อมขาย :</Text>
                        <Switch  />
                    </View>

                    <TextInput
                        label="ชื่อสินค้า"
                        style={{backgroundColor: "transparent"}}
                    />
                         <Picker  selectedValue={this.state.user} onValueChange={this.updateUser}>
                        <Picker.Item label="หน่วยสินค้า" value="steve" />
                        <Picker.Item label="Ellen" value="ellen" />
                        <Picker.Item label="Maria" value="maria" />
                    </Picker>
                    <Picker selectedValue={this.state.user} onValueChange={this.updateUser}>
                        <Picker.Item label="หมวดหมู่" value="steve" />
                        <Picker.Item label="Ellen" value="ellen" />
                        <Picker.Item label="Maria" value="maria" />
                    </Picker>
                    <TextInput
                        label="รหัสสินค้า"
                        style={{backgroundColor: "transparent"}}
                    />
                    <TextInput
                        label="ราคา"
                        style={{backgroundColor: "transparent"}}
                    />
    
                    <TextInput
                        label="ต้นทุน"
                        style={{backgroundColor: "transparent"}}
                    />
                
                    <TextInput
                        label="จำนวนในคลัง"
                        keyboardType='numeric'
                        style={{backgroundColor: "transparent"}}
                    />
                    <View style={{flexDirection:"row"}}>
                    <TextInput 
                        label="บาร์โค๊ด"
                        style={{flex:1 ,backgroundColor: "transparent"}}
                    />
                         <IconButton
                        icon={require('../assets/icon/cashier/scanner.png')}
                        color="#3366CC"
                        size={30}

                        onPress={() => this.props.navigation.navigate('AddProduct')}
                    />
                    </View>
               
                    <TextInput
                        label="รายละเอียด"
                        multiline={true}
                        underlineColorAndroid='transparent'
                        style={{height:100,backgroundColor: "transparent"}}
                    />
                     
                </View>
                <Button style={{ position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: "#6ACA6B" }} contentStyle={{ height: 60 }} mode="contained" onPress={() => this.props.navigation.navigate('ConfirmPayment')}>
                    เพิ่มสินค้า
                 </Button>


            </ScrollView >
            

        )
    }


}