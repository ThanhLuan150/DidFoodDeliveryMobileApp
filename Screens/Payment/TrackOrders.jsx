import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
const TrackOrderScreen  = ()=>{
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
      };
    return(
        <ImageBackground source={require('../../assets/Locations/TrackOrder.png')} style={styles.imageBackground}>
            <ScrollView>
                <TouchableOpacity style={styles.goback} onPress={handleGoBack}>
                    <Image source={require('../../assets/Notification/Group.png')}></Image>
                </TouchableOpacity>
                <View style={styles.viewTrackOrder}>
                    <View style={styles.viewItemTrackOrder}>
                        <Text style={styles.textTrackOrder}>Track Order</Text>
                        <View style={styles.viewInformationTrack}>
                            <Image source={require('../../assets/Locations/PhotoProfile.png')}></Image>
                            <View style={styles.viewText}>
                                <Text style={styles.textMr}>Mr Kemplas</Text>
                                <View style={styles.viewTime}>
                                    <Image style={{ marginTop:4 }} source={require('../../assets/Locations/Iconmaps.png')}></Image>
                                    <Text style={styles.text25}>25 minutes on the way</Text>
                                </View>
                                </View>
                            </View>
                        <View style={styles.viewFunction}>
                            <TouchableOpacity style={styles.ButtonCall}>
                                <Image source={require('../../assets/Locations/Calllogo.png')}></Image>
                                <Text style={styles.textCall}>Call</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ButtonMessage}>
                                <Image source={require('../../assets/Locations/IconMessage.png')}></Image>
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
        paddingRigght:305
    },
    viewTrackOrder:{
        paddingLeft:10,
        paddingRight:10,
        paddingTop:470,
    },
    viewItemTrackOrder:{
        backgroundColor: 'white',
        borderRadius:24,
        paddingLeft:10,
    },
    textTrackOrder:{
        paddingLeft:20,
        paddingTop:20,
       color:'#22242E',
       fontSize:17,
       fontWeight:'600'
    },
    viewInformationTrack:{
        width:'97%',
        flexDirection:'row',
        gap:20,
        backgroundColor:'white',
        elevation: 2, 
        shadowOpacity: 1,
        shadowRadius: 5 ,
        borderRadius:15,
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:10
    },
    textMr:{
        color:'#22242E',
        fontSize:15,
        fontWeight:'500',
        lineHeight:19.65,
        marginTop:8
    },
    viewTime:{
        flexDirection:'row',
        gap:5,
    },
    text25:{
        color:'gray',
        fontSize:14,
        fontWeight:'400'
    },
    viewFunction:{
        flexDirection:'row',
        paddingTop:20,
        paddingBottom:10,
        paddingLeft:10,
        gap:10
    },
    ButtonCall:{
        flexDirection:'row',
        gap:10,
       backgroundColor: 'white',
       borderRadius:15,
       paddingTop:19,
       paddingBottom:19,
       paddingLeft:96,
       paddingRight:96,
        elevation: 2, 
        shadowOpacity: 1,
        shadowRadius: 5 ,
    },
    textCall:{
        color:'#6B50F6',
        fontSize:14,
        fontWeight:'500'
    },
    ButtonMessage:{
        backgroundColor:'#6B50F6',
        borderRadius:15,
        paddingTop:19,
        paddingBottom:19,
        paddingLeft:19,
        paddingRight:19
    }
})
export default TrackOrderScreen;