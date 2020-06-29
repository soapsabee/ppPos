import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import {
    DrawerItem,
    DrawerContentScrollView
} from '@react-navigation/drawer';
import { Drawer, Avatar, Card } from 'react-native-paper';


export function DrawerContent({navigation}) {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView>
                <Drawer.Section >
                    <View style={styles.container}>
                        <Image style={styles.stretch} source={require('../assets/ppposLogo.png')} />
                    </View>
                </Drawer.Section>

                <Drawer.Section >
                    <Drawer.Item
                        icon={require('../assets/icon/drawer/cashier.png')}
                        label="หน้าคิดเงิน"
                        onPress={() => { navigation.navigate('Cashier') }}
                    />
                     <Drawer.Item
                        icon={require('../assets/icon/drawer/storeMange.png')}
                        label="จัดการสินค้า"
                        onPress={() => { navigation.navigate('Product') }}
                    />

                    <Drawer.Item
                        icon={require('../assets/icon/drawer/add.png')}
                        label="เพิ่มหมวดหมู่สินค้า"
                        onPress={() => { navigation.navigate('CategoryAdd') }}
                    />
                     <Drawer.Item
                        icon={require('../assets/icon/drawer/add.png')}
                        label="เพิ่มหน่วยสินค้า"
                        onPress={() => { navigation.navigate('UnitAdd') }}
                    />
                    <Drawer.Item
                        icon={require('../assets/icon/drawer/report.png')}
                        label="รายงานการขาย"
                        onPress={() => { navigation.navigate('Report') }}
                    />
                      <Drawer.Item
                        icon={require('../assets/icon/drawer/backup.png')}
                        label="สำรองข้อมูล"
                        onPress={() => { navigation.navigate('Backup') }}
                    />
                     
                </Drawer.Section>
                <Drawer.Section>
                <Drawer.Item
                        icon={require('../assets/icon/drawer/facebook.png')}
                        label="กลุ่มพูดคุยปรึกษา"
                        onPress={() => { }}
                    />
                <Drawer.Item
                        icon={require('../assets/icon/drawer/gear.png')}
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