import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
const SetLocation = () =>{
    const navigation = useNavigation();
    const handleTrackOrder = () =>{
      navigation.navigate('TrackOrderScreen')
    }
    return(
        <ImageBackground source={require('../../assets/Locations/SetLocation3.png')} style={styles.imageBackground}>
            <View style={styles.viewSearch}>
                <View style={styles.viewsearch}>
                    <Image source={require('../../assets/Locations/search.png')} style={{ position:'relative',left:50,top:13 }}></Image>
                    <TextInput style={styles.textInput} placeholder="Find Your Location"/>
                </View>
            </View>
            <View style={styles.viewLocation}>
                <View style={styles.view}>
                    <Text style={ styles.textYourLocation}>Your Location</Text>
                    <View style={styles.viewLocation1}>
                        <Image source={require('../../assets/Locations/PinLogo.png')}></Image>
                        <View>
                            <Text style={styles.textMashing}>Washington Ave. Manchester,</Text>
                            <Text style={styles.textMashing}>Kentucky 39495</Text>
                        </View>
                    </View>
                    <View style={styles.viewButtonSetLocation}>
                        <TouchableOpacity style={styles.ButtonLocation} onPress={handleTrackOrder}>
                            <Text style={styles.textSetLocation}>Set Location</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ImageBackground>
    )
}
const styles =StyleSheet.create({
    imageBackground:{
        flex:1,
        resizeMode: 'cover'
    },
    viewSearch:{
        paddingTop:61,
        flexDirection:'row',
        paddingRight:70,
        paddingBottom:20
      },
      viewsearch:{
        flexDirection:'row',
      },
      textInput:{
        width:'100%',
        borderRadius:15,
        backgroundColor:'white',
        elevation: 2, 
        shadowOpacity: 1,
        shadowRadius: 5 ,
        paddingBottom:17,
        paddingLeft:53,
        paddingTop:17,
        color:'black',
        height:50
      },
      viewLocation:{
        paddingTop:470,
        paddingLeft:20,
        paddingRight:20,
      },
      view:{ 
        backgroundColor:'white',
        borderRadius:22
      },
      textYourLocation:{
        paddingLeft:10,
        paddingTop:24,
        fontSize:14,
        color:'gray',
        fontWeight:'400'
      },
      viewLocation1:{
        flexDirection:'row',
        gap:14,
        paddingLeft:11,
        paddingTop:16
      },
      textMashing:{
        color:'#22242E',
        fontWeight:'500',
        lineHeight:19.65
      },
      viewButtonSetLocation:{
        paddingTop:20,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10
      },
      ButtonLocation:{
        width:'100%',
        backgroundColor:'#6B50F6',
        paddingTop:21,
        paddingBottom:21,
        paddingLeft:116,
        paddingRight:116,
        borderRadius:15
      },
      textSetLocation:{
        color:'white',
        fontSize:14,
        fontWeight:'600',
        textAlign:'center'
      }
})
export default SetLocation;