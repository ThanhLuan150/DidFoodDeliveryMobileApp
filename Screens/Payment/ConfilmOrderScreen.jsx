import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
const ConfirmOrderScreen = () =>{
    const navigation = useNavigation();
    const hadleGoBack = () =>{
        navigation.goBack();
    }
    const hadleEditPayment = () =>{
        navigation.navigate('EditPaymentScreen')
    }
    const handleEditLocation =() =>{
        navigation.navigate('EditLocationScreen')
    }
    const handleYourOrder =() =>{
        navigation.navigate('YourOrderScreen')
    }
    return(
        <ImageBackground source={require('../../assets/Home/Homebackground.png')}style={styles.imageBackground}>
            <ScrollView>
                <TouchableOpacity style={styles.goback} onPress={hadleGoBack}>
                    <Image source={require('../../assets/Notification/Group.png')}></Image>
                </TouchableOpacity>
                <View style={styles.viewConfirmOrder }>
                    <Text style={ styles.textConfirmOrder}>Confirm Order</Text>
                </View>
                <View style={styles.viewPayment}>
                    <View style={styles.viewPaymentItem}>
                        <View style={styles.viewPaymentContent}>
                            <Text style={styles.textDeliver}>Deliver To</Text>
                            <Text style={styles.textEdit} onPress={handleEditLocation} >Edit</Text>
                        </View>
                        <View style={styles.viewAddress}>
                            <Image style={{ marginLeft:13, marginTop:6 }} source={require('../../assets/Payments/IconLocation.png')}></Image>
                            <View>
                                <Text style={styles.textAddress}>4517 Washington Ave. Manchester</Text>
                                <Text style={styles.textAddress}>Kentucky 39495</Text>
                            </View>
                        </View>
                    </View>    
                    <View style={styles.viewPaymentItem}>
                        <View style={styles.viewPaymentContent}>
                            <Text style={styles.textDeliver}>Payment Method</Text>
                            <Text style={styles.textEdit}  onPress={hadleEditPayment}>Edit</Text>
                        </View>
                        <View style={styles.viewAddress1}>
                            <Image source={require('../../assets/Payments/paypalLogo.png')}></Image>
                            <Text style={styles.textAddress}>0787628654</Text>
                        </View>
                    </View>    
                </View>
                <View style={styles.viewBillOrder}>
                    <View style={styles.viewBill}>
                        <View style={styles.viewSub}>
                            <Text style={styles.textSub}>Sub-Total</Text>
                            <Text style={styles.textSub}>120 $</Text>
                        </View>
                        <View style={styles.viewSub}>
                            <Text style={styles.textSub}>Delivery Charge</Text>
                            <Text style={styles.textSub}>10 $</Text>
                        </View>
                        <View style={styles.viewSub}>
                            <Text style={styles.textSub}>Discount</Text>
                            <Text style={styles.textSub}>20 $</Text>
                        </View>
                        <View style={styles.viewTotal}>
                            <Text style={styles.textTotal}>Total</Text>
                            <Text style={styles.textTotal}>150$</Text>
                        </View>
                        <View style={styles.viewOrder}>
                            <TouchableOpacity style={styles.buttonOrder} onPress={handleYourOrder} >
                                <Text style={styles.textPlaceMyOrder}>Place My Order</Text>
                            </TouchableOpacity>
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
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'column',
        gap:20
     },
     viewPaymentItem:{
        paddingLeft:12,
        backgroundColor:'white',
        elevation: 2, 
        shadowOpacity: 1,
        shadowRadius: 5 ,
        paddingTop:18,
        paddingBottom:20,
        borderRadius:22,
     },
     viewPaymentContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:12,
        paddingRight:20,
        paddingBottom:14
     },
     textDeliver:{
        color:'gray',
        fontSize:14,
        fontWeight:'500',
     },
     textEdit:{
        fontSize:14,
        color:'#6B50F6',
        fontWeight:'400'
     },
     viewAddress:{
        flexDirection:'row',
     },
     viewAddress1:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:20,
        paddingRight:20
     },
     textAddress:{
        paddingLeft:14,
        fontSize:15,
        color:'#22242E',
        fontWeight:'500'
     },
     viewBillOrder:{
        paddingLeft:14,
        paddingRight:14,
        paddingBottom:18,
        paddingTop:190
    },
    viewBill:{
        backgroundColor:'#6B50F6',
        paddingTop:20,
        paddingBottom:20,
        borderRadius:16
    },
    viewSub:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:29,
        paddingRight:24,
        paddingBottom:2
    },
    textSub:{
        color:'white',
        fontSize:14,
        fontWeight:'500'
    },
    viewTotal:{
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:29,
        paddingRight:29
    },
    textTotal:{
        color:'white',
        fontSize:18,
        fontWeight:'500'
    },
    viewOrder:{
        paddingLeft:12,
        paddingRight:12,
        paddingTop:20
    },
    buttonOrder:{
        backgroundColor:'white',
        paddingLeft:106,
        paddingRight:106,
        paddingTop:21,
        paddingBottom:21,
        borderRadius:15
    },
    textPlaceMyOrder:{
        color:'#6B50F6',
        fontSize:14,
        textAlign:'center',
        fontWeight:'600'
    }
})
export default ConfirmOrderScreen;