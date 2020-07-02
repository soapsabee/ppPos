import React from 'react'
import { AppLoading } from 'expo';
import { useFonts, Prompt_300Light } from '@expo-google-fonts/prompt';
import { createStackNavigator , HeaderBackButton , TransitionPresets  } from '@react-navigation/stack';
import Cashier from '../views/Cashier'
import PaymentCashier from '../views/PaymentCashier'
import { NavigationDrawer } from '../components/NavigationDrawer'

const Stack = createStackNavigator();


export const CashierScreen = ({ navigation }) => {

  console.log("navi", navigation)
  let [fontsLoaded] = useFonts({
    Prompt_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Stack.Navigator initialRouteName="Cashier"  screenOptions={{ ...TransitionPresets.SlideFromRightIOS }} >

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

      </Stack.Navigator>)
  }
}