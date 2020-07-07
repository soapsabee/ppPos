import React from 'react'
import { View, Text, Alert, ScrollView } from 'react-native'
import { Card, Title, List, Divider, Button ,Paragraph } from 'react-native-paper'
export default class DailyReports extends React.Component {


  render() {

    return (
      <View style={{ flex:1,flexDirection: "column" }}>
        <View style={{ height: 100, padding: 25, backgroundColor: "#6ACA6B", flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ justifyContent: "center" }}>
            <Title style={{ color: "#fff" }}>
              รวมเงินทั้งสิ้น
          </Title>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Title style={{ color: "#fff" }}>
              2,450.00

            </Title>
            <Text style={{ color: "#fff" }}>
              กำไร: 392.00
            </Text>
          </View>

        </View>

        <View style={{ padding: 10, flexDirection: "row" }}>
          <Button style={{ flex: 1, backgroundColor: "#6BCDFD" }} mode="contained" onPress={() => console.log('Pressed')}>
            วันที่ 22 มิ.ย -22
        </Button>
          <Button style={{ flex: 0.2, backgroundColor: "#FD6721", marginLeft: 10 }} icon={require('../assets/icon/report/csv.png')} mode="contained" onPress={() => console.log('Pressed')}>
            CSV
        </Button>
        </View>

        <ScrollView >
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

          

        </ScrollView>



      </View>

    )
  }
}

