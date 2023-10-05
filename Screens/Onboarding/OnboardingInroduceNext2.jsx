import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
const OnboardingIntroduceNext2 = () =>{
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate('SignIn'); 
      };
    return(
        <ImageBackground  source={require('../../assets/Onboardings/3Onboarding.png')}style={styles.imageBackground}>
        <View style={styles.view}>
            <View style={styles.viewFine}>
                <Text style={styles.textFine}>DIDFOOD is Where Your </Text>
                <Text style={styles.textFine}>Comfort Food Lives</Text>
            </View>
            <View style={styles.viewHere}>
                <Text style={styles.textHere}>Enjoy a fast and smooth food delivery at </Text>
                <Text style={styles.textHere}>your doorstep</Text>
            </View>
        </View>
        <View style={styles.viewNext} >
            <TouchableOpacity onPress={handleLogin} style={styles.buttonNext}>
                <Text style={styles.textNext}>Next</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
    )
}
const styles =StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover'
      },
    view:{
        paddingTop: 531,
    },
    viewFine:{
        paddingLeft:65,
        paddingRight:65,
        paddingBottom:20
    },
    textFine:{
        textAlign:'center',
        fontSize:22,
        fontWeight:'600',
        lineHeight:28.83,
        color:'#22242E'
    },
    viewHere:{
        paddingBottom:49,
        paddingLeft:65,
        paddingRight:65,
    },
    textHere:{
        fontSize:12,
        textAlign:'center',
        lineHeight:21.66,
        fontWeight:'400'
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
export default OnboardingIntroduceNext2;