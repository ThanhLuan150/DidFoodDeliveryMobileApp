import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
const OnboardingIntroduceNext1 = () =>{
    const navigation = useNavigation();
    const handleOnboardingIntroduceNext2 = () => {
        navigation.navigate('OnboardingIntroduceNext2'); 
      };
    return(
        <ImageBackground  source={require('../../assets/Onboardings/2Onboarding.png')}style={styles.imageBackground}>
            <View style={styles.view}>
                <View style={styles.viewFine}>
                    <Text style={styles.textFine}>Fine your Comfort</Text>
                    <Text style={styles.textFine}>Food here</Text>
                </View>
                <View style={styles.viewHere}>
                    <Text style={styles.textHere}>Here you can find a chef of disk for every </Text>
                    <Text style={styles.textHere}>taste and color.Enjoy!</Text>
                </View>
            </View>
            <View style={styles.viewNext} >
                <TouchableOpacity onPress={handleOnboardingIntroduceNext2} style={styles.buttonNext}>
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
        paddingLeft:82,
        paddingRight:82,
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
        fontWeight:'400',
        lineHeight:20.96,
        color:'white'
    }
    
})
export default OnboardingIntroduceNext1;