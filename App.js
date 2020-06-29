import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './components/DrawerContent'
import { Provider as PaperProvider } from 'react-native-paper';
import { CashierScreen,ProductScreen,CategoryAddScreen,UnitAddScreen,ReportScreen,BackupScreen,SettingScreen} from './screen/'
// import { ProductScreen } from './screen/ProductScreen'
import { CategoryScreen } from './screen/CategoryAddScreen'



// const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default class App extends Component {

  render() {


    return (
      <PaperProvider>
        <NavigationContainer>
          <Drawer.Navigator drawerContent={(props) => <DrawerContent {... props} />} >
            <Drawer.Screen name="Cashier" component={CashierScreen} />
            <Drawer.Screen name="Product" component={ProductScreen} />
            <Drawer.Screen name="CategoryAdd" component={CategoryAddScreen} />
            <Drawer.Screen name="UnitAdd" component={UnitAddScreen} />
            <Drawer.Screen name="Report" component={ReportScreen} />
            <Drawer.Screen name="Backup" component={BackupScreen} />
            <Drawer.Screen name="Setting" component={SettingScreen} />
          </Drawer.Navigator>
        </NavigationContainer>
      </PaperProvider>
    )

  }

}

