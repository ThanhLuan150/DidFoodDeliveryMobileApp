import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
const VoucherPromotion = () =>{
    return(
        <ImageBackground source={require('../../assets/Home/Homebackground.png')}style={styles.imageBackground}>
            <ScrollView>
                <TouchableOpacity style={styles.goback}>
                    <Image source={require('../../assets/Notification/Group.png')}></Image>
                </TouchableOpacity>
                <View style={styles.viewNotification}>
                    <Text style={styles.textNotification}>Voucher Promo</Text>
                </View>
                <View style={styles.viewVoucher}>
                    <View style={styles.viewbannera}>
                        <Image style={styles.imagebaner} source={require('../../assets/Voucher/Voucher1.png')}></Image>
                        <View style={styles.viewSpTou} >
                            <View style={styles.viewSpecial}>
                                <Text style={styles.textSpecial}>Special Deal For</Text>
                                <Text style={styles.textSpecial}>October</Text>
                            </View>
                            <View style={styles.viewbutton}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.textbuy}>Buy Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewbannera}>
                        <Image style={styles.imagebaner} source={require('../../assets/Voucher/Voucher2.png')}></Image>
                        <View style={styles.viewSpTou} >
                            <View style={styles.viewSpecial}>
                                <Text style={styles.textSpecial}>Special Deal For</Text>
                                <Text style={styles.textSpecial}>October</Text>
                            </View>
                            <View style={styles.viewbutton}>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.textbuy}>Buy Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.viewCheckout}>
                    <TouchableOpacity style={styles.buttonCheckout}>
                        <Text style={styles.textCheckout}>Check out</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    imageBackground:{
        flex:1,
        resizeMode: 'cover'
    },
    goback:{
        paddingTop:38,
        paddingLeft:25,
        paddingRight:305
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
    viewVoucher:{
        flexDirection:'column',
        gap:20
    },
    viewbannera:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
        
      },
      viewSpTou:{
        position:'absolute',
      },
      viewSpecial:{
        paddingTop:15,
        paddingLeft:185
      },
      textSpecial:{
        fontSize:17,
        fontWeight:'600',
        lineHeight:22.27,
        color:'white'
      },
      viewbutton:{
        paddingLeft:185,
        paddingRight:70,
        paddingTop:15,
        paddingBottom:15
      },
      button:{
        width:'100%',
        backgroundColor:'white',
        elevation: 5, 
        shadowOpacity: 1,
        shadowRadius: 20 ,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:6
      },
      textbuy:{
        fontSize:10,
        color: '#6B50F6',
        fontWeight:'600',
        lineHeight:13.10
      },
      viewCheckout:{
        paddingLeft:25,
        paddingRight:25,
        paddingTop:270,
        paddingBottom:30
      },
      buttonCheckout:{ 
        backgroundColor:'#6B50F6',
        paddingTop:25,
        paddingBottom:25,
        paddingLeft:125,
        paddingRight:125,
        borderRadius:15
      },
      textCheckout:{
        textAlign:'center',
        color:'white',
        fontSize:16,
        fontWeight:'600',

      }
})
export default VoucherPromotion;