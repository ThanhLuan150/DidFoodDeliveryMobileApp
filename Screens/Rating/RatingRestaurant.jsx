import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
const RatingRestaurantScreen = () =>{
    return(
        <ImageBackground source={require('../../assets/Message/Pattern.png')} resizeMode="contain" style={styles.container}>
            <View style={{ justifyContent: "center", top: '50%', flexDirection: "row", height: 200 }}></View>
            <View style={{ justifyContent: "center", flexDirection: "row", width: '100%', marginBottom: 60}}>
                <Image style={styles.callavt} source={require('../../assets/Raiting/Image1.png')}></Image>
            </View>
            <View style={{width: '100%' }}>
                <Text style={styles.name}>Thank You!</Text>
                <Text style={styles.name}>Enjoy Your Meal</Text>
                <Text style={styles.callstatus}>Please rate your Restaurant</Text>
            </View>
            <View style={styles.viewRat}>
                <View style={styles.viewRating}>
                    <Image source={require('../../assets/Raiting/Star.png')}></Image>
                    <Image source={require('../../assets/Raiting/Star.png')}></Image>
                    <Image source={require('../../assets/Raiting/Star.png')}></Image>
                    <Image source={require('../../assets/Raiting/Star1.png')}></Image>
                    <Image source={require('../../assets/Raiting/Star1.png')}></Image>
                </View>
            </View>
            <View style={styles.viewFeedback}>
                <View style={styles.viewEditFeedback}>
                    <View style={styles.viewImageEdit}>
                        <Image source={require('../../assets/Raiting/editIcon.png')}></Image>
                    </View>
                    <View style={styles.Leave}>
                        <TextInput style={styles.textLeave} placeholder='Leave feedback'   placeholderTextColor='gray' ></TextInput>
                    </View>
                </View>
            </View>
            <View style={styles.viewSubmit}>
                <TouchableOpacity style={styles.buttonSubmit}>
                    <Text style={styles.textSubmit}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSkip}>
                    <Text style={styles.textSkip}>Skip</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignContent: 'center',
    }
    ,
    callavt: {
        height: 160,
        width: 160,
        border: 'solid red 12',
    },
    name: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 5
    },
    callstatus: {
        textAlign: 'center',
        fontSize: 19,
        opacity: 0.5,
        paddingTop:20
    },
    viewRat:{
        paddingTop:40,
        paddingRight:60,
        paddingLeft:60,
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center'
    },
    viewRating:{
        flexDirection:'row',
        gap:20,
    },
    viewFeedback:{
        paddingTop:77,
        paddingLeft:20,
        paddingRight:20
    },
    viewEditFeedback:{
        borderRadius:15,
        borderWidth:1,
        borderColor:'#E8E8E8',
        flexDirection:'row',
        gap:10,
        paddingTop:21,
        paddingBottom:21,
        paddingLeft:20
    },
    textLeave:{
        fontSize:17
    },
    viewSubmit:{
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'row',
        justifyContent:'space-between',
        gap:20
    },
    buttonSubmit:{
        backgroundColor:'#6B50F6',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:90,
        paddingRight:90,
        borderRadius:15
    },
    textSubmit:{
        fontSize:14,
        fontWeight:'600',
        color:'white'
    },
    buttonSkip:{
        backgroundColor:'white',
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:100,
        paddingRight:100,
        borderRadius:15
    },
    textSkip:{
        fontSize:14,
        fontWeight:'600',
        color:'#6B50F6'
    },
});
export default RatingRestaurantScreen;