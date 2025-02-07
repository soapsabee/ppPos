import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {
    DrawerItem,
    DrawerContentScrollView
} from '@react-navigation/drawer';
import { Drawer, Avatar, Card } from 'react-native-paper';
import ppposLogo from '../assets/ppposLogo.png';
import cashierIcon from '../assets/icon/drawer/cashier.png'
import storeMangeIcon from '../assets/icon/drawer/storeMange.png'
import addIcon from '../assets/icon/drawer/add.png'
import reportIcon from '../assets/icon/drawer/report.png'
import backupIcon from '../assets/icon/drawer/backup.png'
import facebookIcon from '../assets/icon/drawer/facebook.png'
import gearIcon from '../assets/icon/drawer/gear.png'

export function DrawerContent({navigation}) {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView>
                <Drawer.Section >
                    <View style={styles.container}>
                        <Image style={styles.stretch} source={ppposLogo} />
                    </View>
                </Drawer.Section>

                <Drawer.Section >
                    <Drawer.Item
                        icon={cashierIcon}
                        label="หน้าคิดเงิน"
                        onPress={() => { navigation.navigate('Cashier') }}
                    />
                     <Drawer.Item
                        icon={storeMangeIcon}
                        label="จัดการสินค้า"
                        onPress={() => { navigation.navigate('Product') }}
                    />

                    <Drawer.Item
                        icon={addIcon}
                        label="เพิ่มหมวดหมู่สินค้า"
                        onPress={() => { navigation.navigate('CategoryAdd') }}
                    />
                     <Drawer.Item
                        icon={addIcon}
                        label="เพิ่มหน่วยสินค้า"
                        onPress={() => { navigation.navigate('UnitAdd') }}
                    />
                    <Drawer.Item
                        icon={reportIcon}
                        label="รายงานการขาย"
                        onPress={() => { navigation.navigate('Report') }}
                    />
                      <Drawer.Item
                        icon={backupIcon}
                        label="สำรองข้อมูล"
                        onPress={() => { navigation.navigate('Backup') }}
                    />
                     
                </Drawer.Section>
                <Drawer.Section>
                <Drawer.Item
                        icon={facebookIcon}
                        label="กลุ่มพูดคุยปรึกษา"
                        onPress={() => { }}
                    />
                <Drawer.Item
                        icon={gearIcon}
                        label="ตั้งค่า"
                        onPress={() => { navigation.navigate('Setting') }}
                    />
                </Drawer.Section>
                {/* <DrawerItem
           
            label="Profile"
            onPress={() => {}}
          /> */}
            </DrawerContentScrollView>
            {/* <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                    label="Profile"
                    onPress={() => { }}
                />
            </Drawer.Section> */}
        </View>

    )
}

const styles = StyleSheet.create({
    drawerSection: {
        marginTop: 15
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    stretch: {
        width: 200,
        height: 50,
        resizeMode: 'stretch',
    }
    
});