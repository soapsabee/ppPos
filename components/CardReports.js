import React from 'react'
import { View } from 'react-native'
import { Card, Title,Paragraph } from 'react-native-paper'


export default class CardReports extends React.Component {

    render(){
        return(
            <Card style={{borderWidth:0.1, margin:5}}>
            <Card.Content style={{flexDirection:"row",justifyContent:"space-between"}}>
              <View>
              <Paragraph>2020-มิ.ย.-22 20:47:26</Paragraph>
              <Paragraph>เงินสด</Paragraph>
              </View>
              <View>
                <Title>700.00</Title>
                <Paragraph>กำไร:500</Paragraph>
              </View>
            
            </Card.Content>
          </Card>
        )
    }

}
