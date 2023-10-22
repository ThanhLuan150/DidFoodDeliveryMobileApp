import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';const EditPaymentScreen = () =>{
    const navigation = useNavigation();
    const hadleGoBack = () =>{
        navigation.goBack();
    }
    return(
        <ImageBackground source={require('../../assets/Home/Homebackground.png')}style={styles.imageBackground}>
            <ScrollView>
                <TouchableOpacity style={styles.goback} onPress={hadleGoBack}>
                    <Image source={require('../../assets/Notification/Group.png')}></Image>
                </TouchableOpacity>
                <View style={styles.viewConfirmOrder }>
                    <Text style={ styles.textConfirmOrder}>Payment</Text>
                </View>
                <View style={styles.viewPayment}>
                    <View style={styles.viewPaymentItem}>
                        <View style={styles.viewImageText}>
                            <Image source={require('../../assets/Payments/paypalLogo.png')}></Image>
                            <Text style={styles.phone}>0787628654</Text>
                        </View>
                    </View>
                    <View style={styles.viewPaymentItemDart}>
                        <View style={styles.viewImageText}>
                            <Image style={{ height:23 }} source={require('../../assets/Payments/visa.png')}></Image>
                            <Text style={styles.phoneDart}>0787628654</Text>
                        </View>
                    </View>
                    <View style={styles.viewPaymentItemDart}>
                        <View style={styles.viewImageText}>
                            <Image source={require('../../assets/Payments/Payoneerlogo.png')}></Image>
                            <Text style={styles.phoneDart}>0787628654</Text>
                        </View>
                    </View>
                    <View></View>
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
        paddingRight:305
    },
    viewConfirmOrder :{ 
        paddingTop:19,
        paddingLeft:25,
        paddingRight:190 
     },
     textConfirmOrder:{
         color:'#22242E',
         fontSize:25,
         fontWeight:'600',
         lineHeight:32.75
     },
    viewPayment:{
        flexDirection:'column',
        gap:20,
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20
    },
    viewPaymentItem:{
        backgroundColor:'white',
        elevation: 2, 
        shadowOpacity: 1,
        shadowRadius: 5 ,
        paddingTop:18,
        paddingBottom:20,
        borderRadius:22,
    },
    viewImageText:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:20,
        paddingBottom:20
    },
    phone:{
        color:'#22242E',
        fontSize:14,
        fontWeight:'400',
    },
    viewPaymentItemDart:{
        backgroundColor:'#F6F6F6',
        shadowOpacity: 1,
        shadowRadius: 5 ,
        paddingTop:18,
        paddingBottom:20,
        borderRadius:22,
    },
    phoneDart:{
        color:'gray',
        fontSize:14,
        fontWeight:'400',
    }

})
export default EditPaymentScreen;