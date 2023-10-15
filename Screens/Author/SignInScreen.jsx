import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text ,TextInput,Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
const SignInScreen  = ()=>{
    const navigation = useNavigation();
    const handleSignUp = () => {
        navigation.navigate('SignUp'); 
      };
    const handleSignUpProcess = () => {
        navigation.navigate('SignUpProcessScreen'); 
      };
    const handleForgetPassword = () =>{
      navigation.navigate('ForgetPasswordScreen')
    }
    return(
        <ImageBackground  source={require('../../assets/Signup_Signin/Signup.png')}style={styles.imageBackground}>
            <View style={styles.view}>
                <View style={styles.viewLogin}>
                    <Text style={styles.textLogin}>Login to your Account</Text>
                </View>
                <View style={styles.viewInput}>
                    <View style={styles.viewTextInput}>
                        <TextInput style={styles.TextInput} placeholder="Email"/>
                    </View>
                    <View style={styles.viewTextInput}>
                        <TextInput style={styles.TextInput} placeholder="Password"/>
                    </View>
                </View>
                <View style={styles.viewOr}>
                    <Text style={styles.textOr}>Or Continute With</Text>
                </View>
                <View style={styles.viewButton} >
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.ImageText}>
                            <Image source={require('../../assets/Signup_Signin/facebook.png')}></Image>
                            <Text style={styles.textFacebook}>Facebook</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.ImageText}>
                            <Image source={require('../../assets/Signup_Signin/google.png')}></Image>
                            <Text style={styles.textFacebook}>Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.viewFoSi}>
                    <Text style={styles.textFo} onPress={handleForgetPassword}>Forgot your passworđ</Text>
                    <Text style={styles.textFo} onPress={handleSignUp}>Sign Up</Text>
                </View>
                <View style={styles.viewNext} >
                    <TouchableOpacity style={styles.buttonNext} onPress={handleSignUpProcess}>
                        <Text style={styles.textNext}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
const styles= StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
      },
      view:{
            paddingTop:277
      },
      viewLogin:{
        paddingLeft:80,
        paddingRight:80,
        paddingBottom:40
      },
      textLogin:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        lineHeight:26.20,
        color:'#22242E'
      },
      viewInput:{
        paddingLeft:25,
        paddingRight:25,
        paddingBottom:20
      },
      viewTextInput:{
         paddingBottom:12
      },
      TextInput:{
        width:'100%',
        borderColor: "#F4F4F4",
        borderWidth:1,
        backgroundColor: 'white',
        elevation: 10, // Độ sâu của bóng
        shadowColor: 'rgba(90, 108, 234, 0.07)', // Màu sắc của bóng với độ trong suốt
        shadowOffset: { width: 12, height: 26 }, // Khoảng cách độ sâu và chiều cao của bóng
        shadowOpacity: 1, // Độ trong suốt của bóng (1 cho màu đầy đủ)
        shadowRadius: 50, // Bán kính của bóng,
        borderRadius:15,
        paddingTop:22,
        paddingBottom:22,
        paddingLeft:28
      },
      viewOr:{
        paddingBottom:20,
        paddingLeft:137,
        paddingRight:137
      },
      textOr:{
        textAlign:'center',
        fontSize:12,
        fontWeight:'bold',
        lineHeight:19.98
      },
      viewButton:{
        flexDirection:'row',
        gap:21,
        paddingLeft:25,
        paddingRight:25
      },
      button:{
        width:'47%',
        borderColor: "#F4F4F4",
        borderWidth:1,
        backgroundColor: 'white',
        elevation: 10, // Độ sâu của bóng
        shadowColor: 'rgba(90, 108, 234, 0.07)', // Màu sắc của bóng với độ trong suốt
        shadowOffset: { width: 12, height: 26 }, // Khoảng cách độ sâu và chiều cao của bóng
        shadowOpacity: 1, // Độ trong suốt của bóng (1 cho màu đầy đủ)
        shadowRadius: 50, // Bán kính của bóng,
        borderRadius:15,
        paddingTop:16,
        paddingBottom:16,
        paddingLeft:22
      },
      ImageText:{
        flexDirection:'row',
        gap:13
      },
      textFacebook:{
        color: '#22242E',
        fontSize:14,
        fontWeight:'400',
        paddingTop:2
      },
      viewFoSi:{
        paddingTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:25,
        paddingRight:25,
        paddingBottom:36
      },
      textFo:{
        fontSize:12,
        fontWeight:'400',
        textDecorationLine:'underline',
        color: '#6B50F6',
        lineHeight:19.98

      },
      viewNext:{
        paddingLeft:108,
        paddingRight:108
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
export default SignInScreen ;