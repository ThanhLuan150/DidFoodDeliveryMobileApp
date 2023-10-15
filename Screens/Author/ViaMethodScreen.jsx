import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text ,TextInput,Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
const ForgetPasswordScreen  = ()=>{
    const navigation = useNavigation();
    const handleNext = () => {
        navigation.navigate('UploadPhotoScreen'); 
      };
      const handleGoBack = () => {
        navigation.goBack();
      };
      const handleVerifyCodeScreen = () =>{
        navigation.navigate('')
      }
    return(
        <ImageBackground  source={require('../../assets/Home/Homebackground.png')}style={styles.imageBackground}>
            <View style={styles.viewGpBack} >
                <TouchableOpacity onPress={handleGoBack}>
                     <Image source={require('../../assets/Notification/Group.png')} ></Image>
                </TouchableOpacity>  
            </View>
            <View style={ styles.viewFill}>
                <Text style={ styles.textFill}>Forgot password?</Text>
            </View>
            <View style={ styles.viewThis}>
                <Text style={ styles.textThis}>Select which contact details should we</Text>
                <Text  style={ styles.textThis}> use to reset your password</Text>
            </View>
            <View style={styles.viewForgetPassword}>
                <View style={styles.viewViasms}>
                    <View style={styles.viewtiemViasms}>
                        <Image source={require('../../assets/Signup_Signin/Message.png')}></Image>
                        <View style={styles.styleviewtext}>
                            <Text style={styles.textViasms}>Via sms:</Text>
                            <Text style={styles.textphone}>0787 628 654</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.viewViasms}>
                    <View style={styles.viewtiemViasms}>
                        <Image source={require('../../assets/Signup_Signin/Email.png')}></Image>
                        <View style={styles.styleviewtext}>
                            <Text style={styles.textViasms}>Via email:</Text>
                            <Text style={styles.textphone}>letruongthanhluan1505@gmail.com</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.viewNext} >
                <TouchableOpacity style={styles.buttonNext}>
                    <Text style={styles.textNext} onPress={handleNext}>Next</Text>
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
        fontWeight:'400'
      },
      viewThis:{
        paddingLeft:25
      },
      textThis:{
        color:'#22242E',
        fontSize:12,
        fontWeight:'500',
        lineHeight:21.66
      },
      viewForgetPassword:{
        paddingTop:20,
        paddingLeft:14,
        paddingRight:14,
        flexDirection:'column',
        gap:20
      },
      viewViasms:{
        paddingLeft:23,
        paddingTop:32,
        paddingBottom:32,
        borderColor: "#F4F4F4",
        borderWidth:1,
        backgroundColor: 'white',
        elevation: 10, // Độ sâu của bóng
        shadowColor: 'rgba(90, 108, 234, 0.07)', // Màu sắc của bóng với độ trong suốt
        shadowOffset: { width: 12, height: 26 }, // Khoảng cách độ sâu và chiều cao của bóng
        shadowOpacity: 1, // Độ trong suốt của bóng (1 cho màu đầy đủ)
        shadowRadius: 50, // Bán kính của bóng,
        borderRadius:20,
      },
      viewtiemViasms:{
        flexDirection:'row',
        gap:16
      },
      styleviewtext:{
        flexDirection:'column',
        gap:10
      },
      textViasms:{
        color:'#828282',
        fontSize:16,
        fontWeight:'400',
        lineHeight:24
      },
      textphone:{
        color:'#22242E',
        fontSize:16,
        fontWeight:'400',
        lineHeight:24
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
export default ForgetPasswordScreen   ;