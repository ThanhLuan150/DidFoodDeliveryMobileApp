import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text ,TextInput,Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
const UploadPhotoPreview  = ()=>{
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
      };
    return(
        <ImageBackground  source={require('../../assets/Home/Homebackground.png')}style={styles.imageBackground}>
            <View style={styles.viewGpBack} >
                <TouchableOpacity onPress={handleGoBack}>
                     <Image source={require('../../assets/Notification/Group.png')} ></Image>
                </TouchableOpacity>  
            </View>
            <View style={ styles.viewFill}>
                <Text style={ styles.textFill}>Fill in your bio to get</Text>
                <Text style={ styles.textFill}>started</Text>
            </View>
            <View style={ styles.viewThis}>
                <Text style={ styles.textThis}>This data will be displayed in your account</Text>
                <Text  style={ styles.textThis}> profile for security</Text>
            </View>
            <View style={styles.viewuploadimage}>
            </View>
            <View style={styles.viewNext} >
                <TouchableOpacity style={styles.buttonNext}>
                    <Text style={styles.textNext} >Next</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
const styles= StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
      },
      viewGpBack:{
        paddingTop:38,
        paddingLeft:25
      },
      viewFill:{ 
        paddingTop:20,
        paddingBottom:19,
        paddingLeft:25
      },
      textFill:{ 
        color:'#22242E',
        fontSize:25,
        fontWeight:'500'
      },
      viewThis:{
        paddingLeft:25
      },
      textThis:{
        color:'#22242E',
        fontSize:12,
        fontWeight:'500',
        lineHeight:21.66
      }
      ,viewuploadimage:{
        paddingTop:20,
        flexDirection:'column',
        gap:20

      },
      viewNext:{
        paddingLeft:108,
        paddingRight:108,
        paddingTop:150,
        paddingBottom:60
    },
    buttonNext:{
        width:'100%',
        backgroundColor:'#6B50F6',
        borderRadius:15,
        paddingTop:18,
        paddingBottom:18,
        paddingLeft:60,
        paddingRight:60
    },
    textNext:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'600',
        lineHeight:20.96,
        color:'white'
    }
      
})
export default  UploadPhotoPreview;