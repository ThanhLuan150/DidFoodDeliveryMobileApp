import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
const YourOrderScreen = () =>{
    const navigation = useNavigation();
    const handleFilterScreen = () =>{
        navigation.navigate('FilterScreen')
      }
      const handleNotification = () =>{
        navigation.navigate('NotificationScreen')
      }
    return(
        <ImageBackground source={require('../../assets/Home/Homebackground.png')}style={styles.imageBackground}>
            <ScrollView>
                <View style={styles.viewFiFa}>
                    <View style={styles.viewtext}>
                        <Text style={styles.textFine}>Fine Your</Text>
                        <Text style={styles.textFine}>Favorite Food</Text>
                    </View>
                    <TouchableOpacity onPress={handleNotification}>
                        <Image  source={require('../../assets/Home/Notification.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewSearch}>
                    <View style={styles.viewsearch}>
                        <Image source={require('../../assets/Home/Search.png')} style={{ position:'relative',left:50,top:13 }}></Image>
                        <TouchableOpacity style={styles.textInput} placeholder="What do you want to order" onPress={handleFilterScreen}>
                            <Text>What do you want to order?</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('../../assets/Home/FilterIcon.png')}></Image>
                </View>
                <View style={styles.viewOrderDetailItem}>
                    <View style={styles.viewDetailItem}>
                        <View style={styles.Image}>
                            <Image source={require('../../assets/Payments/MenuPhoto.png')}></Image>
                        </View>
                        <View style={styles.viewOrderText}>
                            <Text style={styles.textSpacy}>Spacy fresh crab</Text>
                            <Text style={styles.textWaroenk}>Waroenk kita</Text>
                            <Text style={styles.text$}>$35</Text>
                        </View>
                        <View style={styles.viewButtonProcess}>
                            <TouchableOpacity style={styles.ButtonProcess}>
                                <Text style={styles.textProcess}>Process</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.viewDetailItem}>
                        <View style={styles.Image}>
                            <Image source={require('../../assets/Payments/MenuPhoto1.png')}></Image>
                        </View>
                        <View style={styles.viewOrderText}>
                            <Text style={styles.textSpacy}>Spacy fresh crab</Text>
                            <Text style={styles.textWaroenk}>Waroenk kita</Text>
                            <Text style={styles.text$}>$35</Text>
                        </View>
                        <View style={styles.viewButtonProcess}>
                            <TouchableOpacity style={styles.ButtonProcess}>
                                <Text style={styles.textProcess}>Process</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.viewDetailItemGray}>
                        <View style={styles.Image}>
                            <Image source={require('../../assets/Payments/MenuPhoto3.png')}></Image>
                        </View>
                        <View style={styles.viewOrderTextGray}>
                            <Text style={styles.textSpacy}>Spacy fresh crab</Text>
                            <Text style={styles.textWaroenk}>Waroenk kita</Text>
                            <Text style={styles.text$gray}>$35</Text>
                        </View>
                        <View style={styles.viewButtonProcessGray}>
                            <TouchableOpacity style={styles.ButtonProcessGray}>
                                <Text style={styles.textProcessGray}>Process</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.viewDetailItemGray}>
                        <View style={styles.Image}>
                            <Image source={require('../../assets/Payments/MenuPhoto3.png')}></Image>
                        </View>
                        <View style={styles.viewOrderTextGray}>
                            <Text style={styles.textSpacy}>Spacy fresh crab</Text>
                            <Text style={styles.textWaroenk}>Waroenk kita</Text>
                            <Text style={styles.text$gray}>$35</Text>
                        </View>
                        <View style={styles.viewButtonProcessGray}>
                            <TouchableOpacity style={styles.ButtonProcessGray}>
                                <Text style={styles.textProcessGray}>Process</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text>Check out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
const styles =StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover'
      },
      viewFiFa:{
        paddingTop:60,
        paddingLeft:31,
        flexDirection:'row',
        justifyContent:'space-between',
      },
      textFine:{
        fontSize:31,
        fontWeight:'600',
        lineHeight:40.62,
      },
      viewSearch:{
        flexDirection:'row',
        paddingRight:60,
        paddingBottom:20
      },
      viewsearch:{
        flexDirection:'row'
      },
      textInput:{
        width:'90%',
        borderRadius:15,
        backgroundColor:'#6B50F6',
        opacity:0.1,
        paddingBottom:17,
        paddingLeft:53,
        paddingTop:17,
        color:'black',
        height:50
      },
      viewOrderDetailItem:{
        paddingLeft:14,
        paddingRight:14,
        paddingTop:20,
        flexDirection:'column',
        gap:20
    },
    viewImage:{
        backgroundColor:'#6B50F6',
        height:200,
        paddingTop:38,
        paddingRight:38,
        paddingLeft:18
    },
    viewDetailItem:{
        flexDirection:'row',
        backgroundColor:'white',
        elevation: 2, 
        shadowOpacity: 1,
        shadowRadius: 5 ,
        paddingTop:18,
        paddingBottom:20,
        borderRadius:15,
        paddingLeft:11
    },
    viewOrderText:{
        paddingLeft:20
    },
    textSpacy:{
        color:'#22242E',
        fontSize:15,
        fontWeight:'600',
        lineHeight:19.65
    },
    textWaroenk:{
        color:'gray',
        fontSize:14
    },
    text$:{
        color:'#6B50F6',
        fontSize:19,
        fontWeight:'600',
        marginTop:4
    },
    viewButtonProcess:{
        marginTop:17,
        paddingLeft:32
    },
    ButtonProcess:{
        backgroundColor:'#6B50F6',
        paddingTop:9,
        paddingBottom:9,
        paddingLeft:12,
        paddingRight:12,
        borderRadius:17.50
    },
    textProcess:{
        color:'white',
        fontSize:12,
        fontWeight:'500',
    },
    viewDetailItemGray:{
        flexDirection:'row',
        backgroundColor:'#F6F6F6',
        elevation: 2, 
        shadowOpacity: 1,
        shadowRadius: 5 ,
        paddingTop:18,
        paddingBottom:20,
        borderRadius:15,
        paddingLeft:11
    },
    viewOrderTextGray:{
        paddingLeft:20
    },
    text$gray:{
        color:'#BEBEBE',
        fontSize:19,
        fontWeight:'600',
        marginTop:4
    },
    viewButtonProcessGray:{
        marginTop:17,
        paddingLeft:32
    },
    ButtonProcessGray:{
        backgroundColor:'#D9D9D9',
        paddingTop:9,
        paddingBottom:9,
        paddingLeft:12,
        paddingRight:12,
        borderRadius:17.50
    },
    textProcessGray:{
        color:'white',
        fontSize:12,
        fontWeight:'500',
    }
})
export default YourOrderScreen;