import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native'
import React from 'react'
import OrderCard from './OrderDetail'
import Total from './Total';
import { useNavigation } from '@react-navigation/native';
import { useState  } from 'react';
const  Card = () => {
    const navigation = useNavigation();
   
    const handleGoback = () =>{
        navigation.goBack();
    }
  const [total, setTotal] = useState(0);

  const handleTotalChange = (newTotal) => {
    setTotal(newTotal);
  };
  return (
    <ImageBackground source={require('../../assets/Home/Homebackground.png')}style={styles.imageBackground}>
        <ScrollView style={styles.orderCantainer}>
            <TouchableOpacity style={styles.goback} onPress={handleGoback}>
                <Image source={require('../../assets/Notification/Group.png')}></Image>
            </TouchableOpacity>
            <View style={styles.viewOrderDetail }>
                <Text style={ styles.textOrderDetail}>Order Detail</Text>
            </View> 
            <OrderCard onTotalChange={handleTotalChange} total={total} />
            <Total subtotal={total} delivery={15} discount={20}/>
        </ScrollView>
   </ImageBackground> 
  )
}
export default Card;

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
    imgBack: {
      marginLeft:'5%',
      flex: 1
    },
    title: {
      fontSize: 25,
      fontWeight: '500',
      marginVertical: 10,
      marginLeft: '5%',
      flex: 1
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