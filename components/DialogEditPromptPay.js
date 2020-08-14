import React from 'react'
import { Button, Dialog, Portal, Paragraph, TextInput } from 'react-native-paper';
import { dispatchProducts, SET_KEY , EDIT_PROMPTPAY } from '../redux/actions/'

export default class DialogEditPromptPay extends React.Component {


    hideDialog = () => {
        this.props.dispatch(dispatchProducts(SET_KEY, { value: false, key: "diaglogEditPromptPay" }))
    }

    editPromptPay = async (value) => {
        await this.props.dispatch(dispatchProducts(EDIT_PROMPTPAY, { value: value, key: "null" }))
        await this.hideDialog()
    }

    handleEditPromptPay = (value) => {
        this.props.dispatch(dispatchProducts(SET_KEY, { value: value, key: "handleInputPromptPay" }))

    }

    render() {
        return (

            <Portal>
                <Dialog visible={this.props.visible} onDismiss={() => this.hideDialog()}>
                    <Dialog.Title>ระบุรหัสพร้อมเพย์</Dialog.Title>
                    <Dialog.Content>
                        <TextInput onChangeText={(value) => this.handleEditPromptPay(value)}/>
                    </Dialog.Content>
                    <Dialog.Actions >
                        <Button onPress={() => this.hideDialog()}>Cancel</Button>
                        <Button onPress={() => this.editPromptPay()}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

        )
    }

}

