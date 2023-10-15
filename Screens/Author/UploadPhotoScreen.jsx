import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text ,TextInput,Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
const UploadPhotoScreen  = ()=>{
  const navigation = useNavigation();
  const handleNext = () => {
      navigation.navigate('SetLocationScreen'); 
    };
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
                <View style={styles.viewFromGalary}>
                    <Image source={require('../../assets/Signup_Signin/Gallery.png')}></Image>
                    <Text style={styles.textFrom}>From Gallery</Text>
                </View>
                <View style={styles.viewFromGalary}>
                    <Image source={require('../../assets/Signup_Signin/camera.png')}></Image>
                    <Text style={styles.textFrom}>Take Photo</Text>
                </View>
            </View>
            <View style={styles.viewNext} >
                <TouchableOpacity style={styles.buttonNext} onPress={handleNext}>
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

      }
      ,viewFromGalary:{
        width:'100%',
        borderColor: "#F4F4F4",
        borderWidth:1,
        backgroundColor: 'white',
        elevation: 10, // Độ sâu của bóng
        shadowColor: 'rgba(90, 108, 234, 0.07)', // Màu sắc của bóng với độ trong suốt
        shadowOffset: { width: 12, height: 26 }, // Khoảng cách độ sâu và chiều cao của bóng
        shadowOpacity: 1, // Độ trong suốt của bóng (1 cho màu đầy đủ)
        shadowRadius: 50, // Bán kính của bóng,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:23,
        paddingBottom:22,
      },
      textFrom:{
        color:'#22242E',
        fontSize:14,
        fontWeight:'500',
        lineHeight:25.27,
        paddingTop:4
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
export default UploadPhotoScreen;