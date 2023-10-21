import React from "react";
import Swipeout from 'react-native-swipeout';
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
const OrderDetailScreen = () =>{
    return(
        <ImageBackground source={require('../../assets/Home/Homebackground.png')}style={styles.imageBackground}>
            <ScrollView>
                <TouchableOpacity style={styles.goback}>
                    <Image source={require('../../assets/Notification/Group.png')}></Image>
                </TouchableOpacity>
                <View style={styles.viewOrderDetail }>
                    <Text style={ styles.textOrderDetail}>Order Detail</Text>
                </View> 
                <View style={styles.viewOrderDetailItem}>
                    <Swipeout
                        right={[
                        {
                            component: (
                                <View style={styles.viewImage}>
                                    <TouchableOpacity>
                                        <Image source={require('../../assets/OrderDetails/Icontrash.png')} style={styles.deleteImage} />
                                    </TouchableOpacity>
                                </View>
                             ),
                        },
                        ]}
                        friction={0.3} // Giảm ma sát lướt nó mượt hơn.
                        style={styles.Swipeout}
                    >
                        <View style={styles.viewDetailItem}>
                        <View style={styles.Image}>
                            <Image source={require('../../assets/OrderDetails/MenuPhoto.png')}></Image>
                        </View>
                        <View style={styles.viewOrderText}>
                            <Text style={styles.textSpacy}>Spacy fresh crab</Text>
                            <Text style={styles.textWaroenk}>Waroenk kita</Text>
                            <Text style={styles.text$}>$35</Text>
                        </View>
                        <View style={styles.viewNumber}>
                            <TouchableOpacity style={styles.button}>
                            <Image source={require('../../assets/OrderDetails/IconMinus.png')}></Image>
                            </TouchableOpacity>
                            <TextInput
                            style={styles.TextInput}
                            keyboardType="numeric"
                            value="2"
                            />
                            <TouchableOpacity style={styles.button}>
                            <Image source={require('../../assets/OrderDetails/IconPlus.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        </View>
                    </Swipeout>
                    <Swipeout
                        right={[
                        {
                            component: (
                                <View style={styles.viewImage}>
                                    <TouchableOpacity>
                                        <Image source={require('../../assets/OrderDetails/Icontrash.png')} style={styles.deleteImage} />
                                    </TouchableOpacity>
                                </View>
                             ),
                        },
                        ]}
                        friction={0.3} 
                        style={styles.Swipeout}
                    >
                        <View style={styles.viewDetailItem}>
                            <View style={styles.Image}>
                                <Image source={require('../../assets/OrderDetails/MenuPhoto1.png')}></Image>
                            </View>
                            <View style={styles.viewOrderText}>
                                <Text style={styles.textSpacy}>Spacy fresh crab</Text>
                                <Text style={styles.textWaroenk}>Waroenk kita</Text>
                                <Text style={styles.text$}>$35</Text>
                            </View>
                            <View style={styles.viewNumber}>
                                <TouchableOpacity style={styles.button}>
                                <Image source={require('../../assets/OrderDetails/IconMinus.png')}></Image>
                                </TouchableOpacity>
                                <TextInput
                                style={styles.TextInput}
                                keyboardType="numeric"
                                value="1"
                                />
                                <TouchableOpacity style={styles.button}>
                                <Image source={require('../../assets/OrderDetails/IconPlus.png')}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Swipeout>
                    <Swipeout
                        right={[
                        {
                            component: (
                                <View style={styles.viewImage}>
                                    <TouchableOpacity>
                                        <Image source={require('../../assets/OrderDetails/Icontrash.png')} style={styles.deleteImage} />
                                    </TouchableOpacity>
                                </View>
                             ),
                        },
                        ]}
                        friction={0.3}
                        style={styles.Swipeout} 
                    >
                        <View style={styles.viewDetailItem}>
                            <View style={styles.Image}>
                                <Image source={require('../../assets/OrderDetails/MenuPhoto2.png')}></Image>
                            </View>
                            <View style={styles.viewOrderText}>
                                <Text style={styles.textSpacy}>Spacy fresh crab</Text>
                                <Text style={styles.textWaroenk}>Waroenk kita</Text>
                                <Text style={styles.text$}>$35</Text>
                            </View>
                            <View style={styles.viewNumber}>
                                <TouchableOpacity style={styles.button}>
                                <Image source={require('../../assets/OrderDetails/IconMinus.png')}></Image>
                                </TouchableOpacity>
                                <TextInput
                                style={styles.TextInput}
                                keyboardType="numeric"
                                value="1"
                                />
                                <TouchableOpacity style={styles.button}>
                                <Image source={require('../../assets/OrderDetails/IconPlus.png')}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Swipeout>
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
                            <TouchableOpacity style={styles.buttonOrder}>
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
    viewOrderDetail:{ 
       paddingTop:19,
       paddingLeft:25,
       paddingRight:190 
    },
    textOrderDetail:{
        color:'#22242E',
        fontSize:25,
        fontWeight:'600',
        lineHeight:32.75
    },
    viewOrderDetailItem:{
        paddingLeft:14,
        paddingRight:14,
        paddingTop:20,
        flexDirection:'column',
        gap:20
    },
    Swipeout:{
        borderRadius:15,
        backgroundColor:'#6B50F6',
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
    viewNumber:{
        flexDirection:'row',
        gap:18,
        paddingLeft:30,
    },
    button:{
        paddingTop:20
    },
    TextInput:{
        width:10
    },
    viewBillOrder:{
        paddingLeft:14,
        paddingRight:14,
        paddingBottom:18,
        paddingTop:60
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
export default OrderDetailScreen;