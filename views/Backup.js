import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default class Backup extends React.Component {

 
  render() {
  
    return (
        <View style= {styles.container}>
          <Text >
            Backup 
          </Text>
          
        </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  }
});