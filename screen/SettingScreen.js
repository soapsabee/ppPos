import React from 'react'
import AppLoading from 'expo-app-loading';
import { useFonts, Prompt_300Light } from '@expo-google-fonts/prompt';
import { createStackNavigator , TransitionPresets } from '@react-navigation/stack';
import Setting from '../views/Setting'
import PromptPaySetting from '../views/PromptPaySetting'
import { NavigationDrawer } from '../components/NavigationDrawer'

const Stack = createStackNavigator();


export const SettingScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Prompt_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Stack.Navigator initialRouteName="SettingScreen" screenOptions={{ ...TransitionPresets.SlideFromRightIOS }} >

        <Stack.Screen
          name="SettingScreen"
          component={Setting}
          options={{
            title: 'ตั้งค่า', //Set Header Title
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
          name="PromptPaySetting"
          component={PromptPaySetting}
          options={{
            title: 'ตั้งค่าพร้อมเพย์', //Set Header Title
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