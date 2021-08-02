import React from 'react'
import AppLoading from 'expo-app-loading';
import { useFonts, Prompt_300Light } from '@expo-google-fonts/prompt';
import { createStackNavigator, HeaderBackButton, TransitionPresets } from '@react-navigation/stack';
import Cashier from '../views/Cashier'
import PaymentCashier from '../views/PaymentCashier'
import PromptPayCashier from '../views/PromptPayCashier'
import ConfirmPayment from '../views/ConfirmPayment'
import { NavigationDrawer } from '../components/NavigationDrawer'
import BarCodeScannerProduct from '../views/BarCodeScannerProduct'

const Stack = createStackNavigator();


export const CashierScreen = ({ navigation }) => {

  let [fontsLoaded] = useFonts({
    Prompt_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Stack.Navigator initialRouteName="Cashier" screenOptions={{ ...TransitionPresets.SlideFromRightIOS }} >

        <Stack.Screen
          name="Cashier"
          component={Cashier}
          options={{
            title: 'หน้าคิดเงิน', //Set Header Title
            headerLeft: () => <NavigationDrawer navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: '#6BCDFD', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontFamily: "Prompt_300Light",

            }
          }}
        />

        <Stack.Screen
          name="PaymentCashier"
          component={PaymentCashier}
          options={{
            title: 'หน้าชำระเงิน', //Set Header Title,
            headerStyle: {
              backgroundColor: '#6BCDFD', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontFamily: "Prompt_300Light",

            },

          }
          }
        />

        <Stack.Screen
          name="PromptPayCashier"
          component={PromptPayCashier}
          options={{
            title: 'พร้อมเพย์', //Set Header Title,
            headerStyle: {
              backgroundColor: '#6BCDFD', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontFamily: "Prompt_300Light",

            },

          }
          }
        />

        <Stack.Screen
          name="ConfirmPayment"
          component={ConfirmPayment}
          options={{
            title: 'ยืนยันการชำระเงิน', //Set Header Title,
            headerStyle: {
              backgroundColor: '#6BCDFD', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontFamily: "Prompt_300Light",

            },

          }
          }
        />

        <Stack.Screen
          name="BarCodeScannerProduct"
          component={BarCodeScannerProduct}
          options={{
            title: 'แสกนบาร์โค๊ดสินค้า', //Set Header Title
            headerStyle: {
              backgroundColor: '#6BCDFD', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontFamily: "Prompt_300Light",

            },
          }}
        />

      </Stack.Navigator>)
  }
}