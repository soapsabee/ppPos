import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card, Title, Button, Paragraph } from 'react-native-paper'
import CardReports from '../components/CardReports'
import { dispatchReciept, INSERT_RECIEPT, FETCH_RECIEPT, SET_RECIEPT_BYKEY, SORT_RECIEPT , EXPORT_REPORT } from "../redux/actions"
import { connect } from 'react-redux'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

export class Reports extends React.Component {


  componentDidMount = () => {

    this.props.dispatch(dispatchReciept(FETCH_RECIEPT, { value: "null", key: "null" }))
  }

  setShow = (show) => {
    this.props.dispatch(dispatchReciept(SET_RECIEPT_BYKEY, { value: show, key: "datePickerShow" }))

  }

 
  _exportCSV = (reciept) => {
    this.props.dispatch(dispatchReciept(EXPORT_REPORT, { value: reciept, key: "null" }))

  }

  onChange = (selectedDate) => {
    const currentDate = selectedDate.type != "dismissed" ? new Date(selectedDate.nativeEvent.timestamp) : this.props.date
    currentDate.setTime(currentDate.getTime() + currentDate.getTimezoneOffset() * 60 * 1000)
    this.setShow(false)
    this.props.dispatch(dispatchReciept(SORT_RECIEPT, { value: currentDate, key: "date" }))
  }

  render() {

    const { reciept, datePickerShow, date, totalBalance, totalProfit } = this.props

  

    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View style={{ height: 100, padding: 25, backgroundColor: "#6ACA6B", flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ justifyContent: "center" }}>
            <Title style={{ color: "#fff" }}>
              รวมเงินทั้งสิ้น
          </Title>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Title style={{ color: "#fff" }}>
              {totalBalance}

            </Title>
            <Text style={{ color: "#fff" }}>
              กำไร: {totalProfit}
            </Text>
          </View>

        </View>

        <View style={{ padding: 10, flexDirection: "row" }}>
          <Button style={{ flex: 1, backgroundColor: "#6BCDFD" }} mode="contained" onPress={() => this.setShow(true)}>
            {`วันที่ ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
          </Button>
          <Button style={{ flex: 0.2, backgroundColor: "#FD6721", marginLeft: 10 }} icon={require('../assets/icon/report/csv.png')} mode="contained" onPress={() => this._exportCSV(reciept)}>
            CSV
        </Button>
        </View>

        <ScrollView >
          {reciept && reciept.map((value,id) => <CardReports key={id} report={value} />)}
        </ScrollView>

        {datePickerShow && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display="default"
            onChange={(value) => { 
             this.onChange(value)
            }
 
          }
          />
        )}


      </View>

    )
  }
}

const mapStateToProps = state => {

  // return state
  return {
    reciept: state.reciept.reciept,
    datePickerShow: state.reciept.datePickerShow,
    date: state.reciept.date,
    totalBalance: state.reciept.totalBalance,
    totalProfit: state.reciept.totalProfit

  }
}

export default connect(mapStateToProps)(Reports)
