import React from 'react'
import { AppLoading } from 'expo';
import { useFonts, Prompt_300Light } from '@expo-google-fonts/prompt';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Report from '../views/Report'
import DailyReports from '../views/DailyReports'
import MonthlyReports from '../views/MonthlyReports'
import { NavigationDrawer } from '../components/NavigationDrawer'

const Stack = createStackNavigator();


export const ReportScreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Prompt_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Stack.Navigator initialRouteName="ReportScreen" screenOptions={{ ...TransitionPresets.SlideFromRightIOS }} >

        <Stack.Screen
          name="ReportScreen"
          component={Report}
          options={{
            title: 'รายงานการขาย', //Set Header Title
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
          name="DailyReports"
          component={DailyReports}
          options={{
            title: 'รายงานรายวัน', //Set Header Title
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
          name="MonthlyReports"
          component={MonthlyReports}
          options={{
            title: 'รายงานรายเดือน', //Set Header Title
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