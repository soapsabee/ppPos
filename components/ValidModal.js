import React from 'react'
import { View } from 'react-native'
import { Button, Modal, Text, Portal , IconButton } from 'react-native-paper';



export default class ValidAddModal extends React.Component {
    state = {
        visible: false,
    }
    showModal = () => {
        this.setState({ visible: true })
    }

    hideModal = () => {
        this.setState({ visible: false })

    }
    render() {
        return (

            <Portal>


                <Modal visible={this.state.visible} onDismiss={this.hideModal}>
                    <View style={{ flexDirection: "column", justifyContent: "space-around", alignItems: "center", backgroundColor: "white", height: 150 }}>
                        <IconButton icon="alert-circle" />
                        <Text>กรุณาป้อนบาร์โค๊ด และ จำนวนสินค้าก่อน</Text>
                        <Button mode="Text" onPress={() => console.log('Pressed')}>
                            OK
                </Button>
                    </View>

                </Modal>

            </Portal>

        )
    }

}