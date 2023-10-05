import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
const SignUpScreen  = ()=>{
    const navigation = useNavigation();
    const handleOnboardingIntroduceNext2 = () => {
        navigation.navigate('OnboardingIntroduceNext2'); 
      };
    return(
        <></>
    )
}
export default  SignUpScreen;