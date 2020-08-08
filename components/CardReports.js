import React from 'react'
import { View } from 'react-native'
import { Card, Title,Paragraph } from 'react-native-paper'


export default class CardReports extends React.Component {

    render(){
        return(
            <Card style={{borderWidth:0.1, margin:5}}>
            <Card.Content style={{flexDirection:"row",justifyContent:"space-between"}}>
              <View>
              <Paragraph>{this.props.report.date}</Paragraph>
              <Paragraph>เงินสด</Paragraph>
              </View>
              <View>
                <Title>{this.props.report.balance}</Title>
                <Paragraph>กำไร:{this.props.report.balance - this.props.report.totalcost }</Paragraph>
              </View>
            
            </Card.Content>
          </Card>
        )
    }

}
