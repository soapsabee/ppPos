import React from 'react'
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export const NavigationDrawer = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
      //Props to open/close the drawer
      props.navigationProps.toggleDrawer();
    };
  
  
  
    return (
      <View style={{ flexDirection: 'row' }}>
        <Icon.Button name="ios-menu" size={25} marginLeft={10} backgroundColor={"transparent"} onPress={() => toggleDrawer()}>
  
        </Icon.Button>
      </View>
    );
  }