import React from 'react'
import { AppLoading } from 'expo';
import { useFonts, Prompt_300Light } from '@expo-google-fonts/prompt';
import { createStackNavigator } from '@react-navigation/stack';
import Backup from '../views/Backup'
import { NavigationDrawer } from '../components/NavigationDrawer'

const Stack = createStackNavigator();


export const BackupScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
      Prompt_300Light,
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <Stack.Navigator initialRouteName="Backup" >
  
          <Stack.Screen
            name="Backup"
            component={Backup}
            options={{
              title: 'สำรองข้อมูล', //Set Header Title
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
  
        </Stack.Navigator>)
    }
  }