import React from 'react'
import AppLoading from 'expo-app-loading';
import { useFonts, Prompt_300Light } from '@expo-google-fonts/prompt';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Products from '../views/Products'
import AddProduct from '../views/AddProduct'
import BarCodeScannerProduct from '../views/BarCodeScannerProduct'
import { NavigationDrawer } from '../components/NavigationDrawer'

const Stack = createStackNavigator();

export const ProductScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Prompt_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Stack.Navigator initialRouteName="Products" screenOptions={{ ...TransitionPresets.SlideFromRightIOS }} >

        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            title: 'หน้าจัดการสินค้า', //Set Header Title
            headerLeft: () => <NavigationDrawer navigationProps={navigation} />,
            headerStyle: {
              backgroundColor: '#6BCDFD', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontFamily: "Prompt_300Light",

            },
          }}
        />

        <Stack.Screen
          name="AddProduct"
          component={AddProduct}
          options={{
            title: 'เพิ่มสินค้า', //Set Header Title
            headerStyle: {
              backgroundColor: '#6BCDFD', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontFamily: "Prompt_300Light",

            },
          }}
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