import React from 'react'
import { AppLoading } from 'expo';
import { useFonts, Prompt_300Light } from '@expo-google-fonts/prompt';
import { createStackNavigator } from '@react-navigation/stack';
import UnitAdd from '../views/UnitAdd'
import { NavigationDrawer } from '../components/NavigationDrawer'

const Stack = createStackNavigator();


export const UnitAddScreen = ({ navigation }) => {
    let [fontsLoaded] = useFonts({
      Prompt_300Light,
    });
  
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <Stack.Navigator initialRouteName="UnitAddScreen" >
  
          <Stack.Screen
            name="UnitAddScreen"
            component={UnitAdd}
            options={{
              title: 'เพิ่มหน่วยสินค้า', //Set Header Title
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