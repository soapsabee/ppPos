import React from 'react'
import { Button, Dialog, Portal, Paragraph } from 'react-native-paper';
import { dispatchProducts, DIALOG_ADDPRODUCT } from '../redux/actions/'

export default class DialogAlertAddProduct extends React.Component {


    hideDialog = () => {
        this.props.dispatch(dispatchProducts(DIALOG_ADDPRODUCT, { value: false, key: "dialogAlertAddProduct" }))
    }

    render() {
        return (

            <Portal>
                <Dialog visible={this.props.visible} onDismiss={() => this.hideDialog()}>
                    <Dialog.Content>
                    <Paragraph>{this.props.detail}</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions >
                        <Button onPress={() => this.hideDialog()}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

        )
    }

}