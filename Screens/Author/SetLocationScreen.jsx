import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text ,TextInput,Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
const SetLocationScreen  = ()=>{
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
      };
    const handleNext = () => {
        navigation.navigate('');
      };
    return(
        <ImageBackground  source={require('../../assets/Home/Homebackground.png')}style={styles.imageBackground}>
            <View style={styles.viewGpBack} >
                <TouchableOpacity onPress={handleGoBack}>
                     <Image source={require('../../assets/Notification/Group.png')} ></Image>
                </TouchableOpacity>  
            </View>
            <View style={ styles.viewFill}>
                <Text style={ styles.textFill}>Set Your Location</Text>
            </View>
            <View style={ styles.viewThis}>
                <Text style={ styles.textThis}>This data will be displayed in your account</Text>
                <Text  style={ styles.textThis}> profile for security</Text>
            </View>
            <View style={styles.viewuploadimage}>
                <View style={styles.viewFromGalary}>
                    <View style={styles.viewYourlocation}>
                        <View style={styles.iconLocation}>
                            <Image source={require('../../assets/Signup_Signin/placeholder.png')}></Image>
                        </View>
                        <Text style={styles.textYourLocation}>Your Location</Text>
                    </View>
                    <View style={styles.viewButtonLocation}>
                        <TouchableOpacity style={styles.buttonSetLocation}>
                            <Text style={styles.textSetLocation}>Set Location</Text>
                        </TouchableOpacity>
                    </View>
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
      }
      ,viewuploadimage:{
        paddingTop:20,
        flexDirection:'column',
        gap:20,
        paddingLeft:17,
        paddingRight:17

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
        borderRadius:22,
      },
      viewYourlocation:{
        flexDirection:'row',
        gap:15,
        paddingLeft:10,
        paddingRight:180,
        paddingTop:20,
        paddingBottom:40
      },
      iconLocation:{
        backgroundColor: '#6B50F6',
        width:30,
        height:30,
       borderRadius:20,
       justifyContent:'center',
        alignItems:'center'
      },
      textYourLocation:{
        fontSize:15,
        color:'#22242E',
        fontWeight:'500',
        marginTop:4,
        marginBottom:4
      },
      viewButtonLocation:{
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10
      },
      buttonSetLocation:{
        width: '100%',
        backgroundColor: '#F6F6F6',
        shadowColor: 'rgba(90, 108, 234, 0.07)',
        shadowOffset: {
        width: 0,
        height: 0,
        },
        shadowRadius: 50,
        shadowOpacity: 1,
        paddingTop:21,
        paddingBottom:21,
        paddingLeft:116,
        paddingRight:116,
        borderRadius:15
      },
      textSetLocation:{
        textAlign:'center',
        color:'#22242E',
        fontWeight:'500',

      },
      viewNext:{
        paddingLeft:108,
        paddingRight:108,
        paddingTop:300,
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
export default SetLocationScreen;