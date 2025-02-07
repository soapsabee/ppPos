import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title, List, Divider } from 'react-native-paper';
import { connect } from 'react-redux';
import { dispatchReciept, RECIEPT_SALE_TODAY } from "../redux/actions";

const Report = ({ totalBalanceNow, totalProfitNow, dispatch, navigation }) => {

  useEffect(() => {
    dispatch(dispatchReciept(RECIEPT_SALE_TODAY, { value: "null", key: "null" }));
  }, [dispatch]);

  return (
    <View style={{ flexDirection: "column" }}>
      <View style={{ height: 100, padding: 25, backgroundColor: "#6ACA6B", flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ justifyContent: "center" }}>
          <Title style={{ color: "#fff" }}>
            ยอดขายวันนี้
          </Title>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Title style={{ color: "#fff" }}>
            {totalBalanceNow}
          </Title>
          <Text style={{ color: "#fff" }}>
            กำไร: {totalProfitNow}
          </Text>
        </View>
      </View>

      <List.Item
        title="สรุปยอดขายรายวัน"
        description="ระบุจาก วัน/เดือน/ปี"
        left={props => <List.Icon {...props} icon="folder" />}
        onPress={() => navigation.navigate('DailyReports')}
      />
      <Divider />
           {/* <List.Item
          title="สรุปยอดขายรายเดือน"
          description="ระบุจาก เดือน/ปี"
          left={props => <List.Icon {...props} icon="folder" />}
          onPress={() => this.props.navigation.navigate('MonthlyReports')}
        />
            <Divider /> */}
    </View>
  );
};

const mapStateToProps = state => ({
  totalBalanceNow: state.reciept.totalBalanceNow,
  totalProfitNow: state.reciept.totalProfitNow
});

export default connect(mapStateToProps)(Report);
