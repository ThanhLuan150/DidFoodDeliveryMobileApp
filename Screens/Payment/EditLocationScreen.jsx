import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
const EditLocationScreen = () =>{
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
                    <Text style={ styles.textConfirmOrder}>Shipping</Text>
                </View>
                <View style={styles.viewLocation}>
                    <View style={styles.viewLocationItem}>
                        <Text style={styles.textOrderLocation}>Order Location</Text>
                        <View style={styles.viewLocationImage}>
                            <Image source={require('../../assets/Payments/IconLocation.png')}></Image>
                            <View>
                                <Text style={styles.textLocation}>8502 Preston Rd. Inglewood,</Text>
                                <Text style={styles.textLocation}> Maine 98380</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewLocationItem}>
                        <Text style={styles.textOrderLocation}>Order Location</Text>
                        <View style={styles.viewLocationImage}>
                            <Image source={require('../../assets/Payments/IconLocation.png')}></Image>
                            <View>
                                <Text style={styles.textLocation}>8502 Preston Rd. Inglewood,</Text>
                                <Text style={styles.textLocation}> Maine 98380</Text>
                            </View>
                        </View>
                        <Text style={styles.textsetLocation}>set Location</Text>
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
     viewLocation:{
        flexDirection:'column',
        gap:20,
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20
     },
     viewLocationItem:{
        paddingTop:17,
        backgroundColor:'white',
        elevation: 2, 
        shadowOpacity: 1,
        shadowRadius: 5 ,
        paddingBottom:20,
        borderRadius:22,
        paddingLeft:12
     },
     textOrderLocation:{
        color:'gray',
        fontSize:14,
        fontWeight:'400',
        paddingBottom:16
     },
     viewLocationImage:{
        flexDirection:'row',
        gap:14
     },
     textLocation:{
        color:'#22242E',
        fontSize:15,
        lineHeight:19.65,
        fontWeight:'500'
     },
     textsetLocation:{ 
        color:'#6B50F6',
        paddingTop:20,
        paddingLeft:60,
     }
    })
export default EditLocationScreen;