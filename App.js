import React, { Component } from 'react';
import  { Provider as StoreProvider } from 'react-redux'
import configureStore from "./redux/store"
import db from './redux/database'

import { NavigationContainer , DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './components/DrawerContent'
import { Provider as PaperProvider } from 'react-native-paper';
import { CashierScreen,ProductScreen,CategoryAddScreen,UnitAddScreen,ReportScreen,BackupScreen,SettingScreen} from './screen/'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};
// const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default class App extends Component {

 
  render() {


    return (
      <StoreProvider store={configureStore}>
      <PaperProvider>
        <NavigationContainer theme={MyTheme}>
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
      </StoreProvider>
    )

  }

}

