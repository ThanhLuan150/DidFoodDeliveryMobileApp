import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
const OnboardingIntroduce = () =>{
    const navigation = useNavigation();
    const handleOnboardingIntroduceNext1 = () => {
        navigation.navigate('OnboardingIntroduceNext1'); 
      };
    return (
        <ImageBackground  source={require('../../assets/Onboardings/Onboarding.png')}style={styles.imageBackground}>
            <View style={styles.viewGet}>
                <TouchableOpacity style={styles.button} onPress={handleOnboardingIntroduceNext1}>
                    <Text style={styles.buttonText}> Get Start</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
};
   
const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover'
      },
      viewGet:{
            paddingTop:650,
            paddingLeft:80,
            paddingRight:80
      },
    button:{
        width:'100%',
        backgroundColor:'#6B50F6',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:60,
        paddingRight:60,
        paddingTop:18,
        paddingBottom:18,
        borderRadius:15
    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
        lineHeight:20.96,
    }
}
  
)       
    

export default OnboardingIntroduce;


