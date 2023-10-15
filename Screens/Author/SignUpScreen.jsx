import { View ,ImageBackground,StyleSheet,Image, TextInput,TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
const SignUpScreen  = ()=>{
    const navigation = useNavigation();
    const handleLoginScreen = () => {
        navigation.navigate('SignIn'); 
      };
      const handleLoginScreen1 = () => {
        navigation.navigate('SignIn'); 
      };
    return(
        <ImageBackground source={require('../../assets/Signup_Signin/Signin.png')} style={styles.imageBackground} >
            <View style={styles.viewTestSign}>
                <Text style={styles.textSign}>Sign Up for free</Text>
            </View>
            <View style={styles.viewInput}>
                <View style={styles.viewTextInput}>
                        <TextInput style={styles.TextInput} placeholder="Name"/>
                </View>
                <View style={styles.viewTextInput}>
                    <TextInput style={styles.TextInput} placeholder="Email"/>
                </View>
                <View style={styles.viewTextInput}>
                    <TextInput style={styles.TextInput} placeholder="Password"/>
                </View>
            </View>
            <View style={styles.viewKeep}>
                <TouchableOpacity style={styles.checkbox}><Image source={require('../../assets/Signup_Signin/check.png')}></Image></TouchableOpacity>
                <Text style ={styles.textKeep}>Keep Me Signed In</Text>
            </View>
            <View style={styles.viewKeep}>
                <TouchableOpacity style={styles.checkbox}><Image source={require('../../assets/Signup_Signin/check.png')}></Image></TouchableOpacity>
                <Text style ={styles.textKeep}>Email Me About Special Pricing</Text>
            </View>
            <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={handleLoginScreen}>
                    <Text style={styles.textbutton}>Create Account</Text>
                </TouchableOpacity>
                <Text style={styles.textAdready} onPress={handleLoginScreen1}>Adready have an account</Text>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    imageBackground:{
        flex:1,
        resizeMode: 'cover',
    },
    viewTestSign:{
        paddingTop:270,
        paddingLeft:108,
        paddingRight:107
    },
    textSign:{
        color:'#22242E',
        fontSize:20,
        fontWeight:'600',
        lineHeight:26.20,
        textAlign:'center'
    },
    viewInput:{
        paddingTop:46,
        padidngLeft:25,
        flexDirection:'column',
        gap:12
    },
    viewTextInput:{
        paddingLeft:26,
        paddingRight: 26
    },
    viewsearch:{
        flexDirection:'row'
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
      viewKeep:{
        flexDirection:'row',
        gap:7,
        paddingLeft:30,
        paddingTop:20
      },
      checkbox:{
        backgroundColor:'#6B50F6',
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        paddingTop:4,
        paddingBottom:4,
        paddingLeft:4,
        paddingRight:4,
        borderRadius:10

      },
      textKeep:{
        fontSize:12,
        color:'#22242E',
        fontWeight:'500'
      },
      viewButton:{
        paddingTop:35,
        paddingLeft:100,
        paddingRight:100
      },
      button:{
        backgroundColor:'#6B50F6',
        width:'100%',
        paddingTop:18,
        paddingBottom:18,
        paddingLeft:27,
        paddingRight:26,
        borderRadius:15
      },
      textbutton:{
        color:'white',
        textAlign:'center',
        fontWeight:'500'
      },
      textAdready:{
        color:'#6B50F6',
        fontSize:12,
        fontWeight:'500',
        lineHeight:19.98,
        textAlign:'center'
      }
})

export default  SignUpScreen;