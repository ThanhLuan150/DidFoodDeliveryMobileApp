import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
const NotificationScreen = () =>{
    return(
        <ImageBackground source={require('../../assets/Home/Homebackground.png')}style={styles.imageBackground}>
            <ScrollView>
                <TouchableOpacity style={styles.goback}>
                    <Image source={require('../../assets/Notification/Group.png')}></Image>
                </TouchableOpacity>
                <View style={styles.viewNotification}>
                    <Text style={styles.textNotification}>Notification</Text>
                </View>
                <View style={styles.viewListNotification}>
                    <View style={styles.viewitemNotification}>
                       <Image source={require('../../assets/Notification/checked.png')}></Image>
                       <View>
                            <Text style={styles.textYour}>Your order has been taken by the driver</Text>
                            <Text style={styles.textRecently}>Recently</Text>
                       </View>
                    </View>
                    <View style={styles.viewitemNotification}>
                       <Image source={require('../../assets/Notification/money.png')}></Image>
                       <View>
                            <Text style={styles.textYour}>Topup for $100 was successful</Text>
                            <Text style={styles.textRecently}>10.00 Am</Text>
                       </View>
                    </View>
                    <View style={styles.viewitemNotification}>
                       <Image source={require('../../assets/Notification/x-button.png')}></Image>
                       <View>
                            <Text style={styles.textYour}>Your order has been canceled</Text>
                            <Text style={styles.textRecently}>22 Juny 2021</Text>
                       </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
const styles =StyleSheet.create({
    imageBackground:{
        flex:1,
        resizeMode: 'cover'
    },
    goback:{
        paddingTop:38,
        paddingLeft:25,
        paddingRigght:305
    },
    viewNotification:{
        paddingLeft:25,
        paddingTop:19,
        paddingBottom:20
    },
    textNotification:{
        color:'#22242E',
        fontSize:25,
        fontWeight:'800',
        lineHeight:32.76
    },
    viewListNotification:{
        paddingLeft:14,
        paddingRight:14,
        gap:20,
        paddingTop:15
    },
    viewitemNotification:{
        flexDirection:'row',
        backgroundColor: '#FFFFFF',
        gap:20,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:24,
        paddingBottom:23,
        borderColor:'#6B50F6',
        borderWidth:1,
        borderRadius:22
    },
    textYour:{
        color:'#22242E',
        fontSize:15,
        paddingRight:15
    },
    textRecently:{
        paddingTop:4,
        color:'gray',
        fontSize:15,
    }
})
export default NotificationScreen;