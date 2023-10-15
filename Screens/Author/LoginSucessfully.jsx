import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text ,TextInput,Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
const PasswordSucessfullyScreen= () =>{
    const navigation = useNavigation();
    const handleNext = () => {
        navigation.navigate('Home'); 
      };
    const handleLogin = () =>{
        navigation.navigate('SignIn')
    }
    return(
        <ImageBackground source={require('../../assets/Signup_Signin/SignupNotification.png')}style={styles.imageBackground}>
            <View style={styles.viewImage}>
                <Image source={require('../../assets/Signup_Signin/Illustration.png')}></Image>
            </View>
            <View style={styles.viewNotification}>
                <Text style={styles.textCongrats}>Congrats!</Text>
                <Text style={styles.textYourProfile}>Password reset succesful</Text>
            </View>
            <View style={styles.viewNext} >
                <TouchableOpacity style={styles.buttonNext} onPress={handleNext}>
                    <Text style={styles.textNext} onPress={handleLogin}>Back</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
const styles =StyleSheet.create({
    imageBackground: {
            flex: 1,
            resizeMode: 'cover',
        },
    viewImage:{
        paddingTop:227,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    viewNotification:{
        paddingTop:36,
        flexDirection:'column',
        gap:12
    },
    textCongrats:{
        fontSize:30,
        color:'#6B50F6',
        fontWeight:'600',
        textAlign:'center'
    },
    textYourProfile:{
        fontSize:23,
        fontWeight:'600',
        lineHeight:30.14,
        color:'#22242E',
        textAlign:'center'
    },
    viewNext:{
        paddingLeft:108,
        paddingRight:108,
        paddingTop:180,
        paddingBottom:60
    },
    buttonNext:{
        width:'100%',
        backgroundColor:'#6B50F6',
        borderRadius:15,
        paddingTop:18,
        paddingBottom:18,
        paddingLeft:42,
        paddingRight:42
    },
    textNext:{
        textAlign:'center',
        fontSize:16,
        fontWeight:'600',
        lineHeight:20.96,
        color:'white'
    }
})
export default PasswordSucessfullyScreen;