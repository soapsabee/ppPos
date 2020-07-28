import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { render } from 'react-dom';
import { connect } from 'react-redux'
import { dispatchProducts,dispatchCashier, SET_BARCODE_SCANNER, ADD_BASKET_CASHIER } from '../redux/actions/'

export class BarCodeScannerProduct extends React.Component {
    state = {
        hasCameraPermission: null,
        scanned: false,
    };


    async componentDidMount() {
        this.getPermissionsAsync();
    }

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
       this.props.dispatch(dispatchProducts(SET_BARCODE_SCANNER, { value: { status: status, barcode: "" }, key: "hasCameraPermission" }));

        // this.setState({ hasCameraPermission: status === 'granted' });
        // if (this.props.route.params.routeName == "Product") {
        //     this.props.dispatch(dispatchProducts(SET_BARCODE_SCANNER, { value: { status: status, barcode: "" }, key: "hasCameraPermission" }));
        // } else if (this.props.route.params.routeName == "Cashier") {
        //     this.props.dispatch(dispatchProducts(ADD_BASKET_CASHIER, { value: { status: status, barcode: "" }, key: "hasCameraPermission" }))

        // }
    };

    setBarcodeScanner = () => {
        if (this.props.route.params.routeName == "AddProduct") {
            this.props.dispatch(dispatchProducts(SET_BARCODE_SCANNER, { value: { status: false, barcode: "" }, key: "scanned" }))
        } else if (this.props.route.params.routeName == "Cashier") {
            this.props.dispatch(dispatchCashier(ADD_BASKET_CASHIER, { value: { status: false, barcode: "" }, key: "scanned" }))

        }
    }

    render() {

        console.log("route:", this.props.route.params.routeName);
        const { hasCameraPermission, scanned , scannedCashier } = this.props;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned || scannedCashier ? undefined : this.handleBarCodeScanned}
                    style={[StyleSheet.absoluteFillObject]}
                >

                    <View style={styles.layerTop} />
                    <View style={styles.layerCenter}>
                        <View style={styles.layerLeft} />
                        <View style={styles.focused} />
                        <View style={styles.layerRight} />
                    </View>
                    <View style={styles.layerBottom} />

                </BarCodeScanner>

                {scanned || scannedCashier && (
                    <Button title={'Tap to Scan Again'} onPress={() => this.setBarcodeScanner()} />
                )}
            </View>
        );
    }

    handleBarCodeScanned = ({ type, data }) => {
        if (this.props.route.params.routeName == "AddProduct") {
            this.props.dispatch(dispatchProducts(SET_BARCODE_SCANNER, { value: { status: true, barcode: data }, key: "scanned" }));
            alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        } else if (this.props.route.params.routeName == "Cashier") {
            this.props.dispatch(dispatchCashier(ADD_BASKET_CASHIER, { value: { status: true, barcode: data }, key: "scanned" }));
            alert(`Bar code ADD with type ${type} and data ${data} has been scanned!`);
        }


    };

}


const mapStateToProps = state => {

    // return state
    return {
        hasCameraPermission: state.products.hasCameraPermission,
        scanned: state.products.scanned,
        scannedCashier: state.cashier.scanned
    }

}

export default connect(mapStateToProps)(BarCodeScannerProduct)

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({

    layerTop: {
        flex: 2,
        backgroundColor: opacity
    },
    layerCenter: {
        flex: 1,
        flexDirection: 'row'
    },
    layerLeft: {
        flex: 1,
        backgroundColor: opacity
    },
    focused: {
        flex: 10
    },
    layerRight: {
        flex: 1,
        backgroundColor: opacity
    },
    layerBottom: {
        flex: 2,
        backgroundColor: opacity
    },
});


