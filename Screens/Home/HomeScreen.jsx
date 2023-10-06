import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput } from "react-native";
import Svg, { Path } from 'react-native-svg';

const HomeScreen = () =>{
    return(
        <ImageBackground source={require('../../assets/Home/Homebackground.png')}style={styles.imageBackground}>
            <ScrollView>
                <View style={styles.viewFiFa}>
                    <View style={styles.viewtext}>
                        <Text style={styles.textFine}>Fine Your</Text>
                        <Text style={styles.textFine}>Favorite Food</Text>
                    </View>
                    <Image  source={require('../../assets/Home/Notification.png')}></Image>
                </View>
                <View style={styles.viewSearch}>
                    <View style={styles.viewsearch}>
                        <Image source={require('../../assets/Home/Search.png')} style={{ position:'relative',left:50,top:13 }}></Image>
                        <TextInput style={styles.textInput} placeholder="What do you want to order"/>
                    </View>
                    <Image source={require('../../assets/Home/FilterIcon.png')}></Image>
                </View>
                <View style={styles.viewbannera}>
                    <Image style={styles.imagebaner} source={require('../../assets/Home/protion.png')}></Image>
                    <View style={styles.viewSpTou} >
                        <View style={styles.viewSpecial}>
                            <Text style={styles.textSpecial}>Special Deal For</Text>
                            <Text style={styles.textSpecial}>October</Text>
                        </View>
                        <View style={styles.viewbutton}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.textbuy}>Buy Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.viewNeVi}>
                    <Text style={styles.textNe}>Nearest Restaurant</Text>
                    <Text style={styles.textviewMore}>View More</Text>
                </View>
                <View style={styles.viewListItem}>
                    <View style={styles.viewItem}>
                        <View style={styles.viewImage}>
                            <Image source={require('../../assets/Home/mage.png')}></Image>
                        </View>
                        <Text style={styles.textVegan}>Vegan Resto</Text>
                        <Text style={styles.textMin}>12 Mins</Text>
                    </View>
                    <View style={styles.viewItem}>
                        <View style={styles.viewImage}>
                            <Image  source={require('../../assets/Home/Heaththy.png')}></Image>
                        </View>
                        <Text style={styles.textVegan}>Vegan Resto</Text>
                        <Text style={styles.textMin}>12 Mins</Text>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover'
      },
      viewFiFa:{
        paddingTop:60,
        paddingLeft:31,
        paddingLeft:39,
        flexDirection:'row',
        justifyContent:'space-between',
      },
      textFine:{
        fontSize:31,
        fontWeight:'600',
        lineHeight:40.62,
      },
      viewSearch:{
        flexDirection:'row',
        paddingRight:60,
        paddingBottom:20
      },
      viewsearch:{
        flexDirection:'row'
      },
      textInput:{
        width:'90%',
        borderRadius:15,
        backgroundColor:'#6B50F6',
        opacity:0.1,
        paddingBottom:17,
        paddingLeft:53,
        paddingTop:17,
        color:'black',
        height:50
      },
      viewbannera:{
        paddingLeft:30,
        paddingRight:10
        
      },
      viewSpTou:{
        position:'absolute',
      },
      viewSpecial:{
        paddingTop:30,
        paddingLeft:203
      },
      textSpecial:{
        fontSize:17,
        fontWeight:'600',
        lineHeight:22.27,
        color:'white'
      },
      viewbutton:{
        paddingLeft:203,
        paddingRight:70,
        paddingTop:15
      },
      button:{
        width:'100%',
        backgroundColor:'white',
        elevation: 5, 
        shadowOpacity: 1,
         shadowRadius: 20 ,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:6
      },
      textbuy:{
        fontSize:10,
        Color: '#6B50F6',
        fontWeight:'600',
        lineHeight:13.10
      },
      viewNeVi:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:25,
        paddingLeft:32,
        paddingRight:32
      },
      textNe:{
        fontSize:15,
        fontWeight:'500',
        lineHeight:19.65,
        color:'#22242E'
      },
      textviewMore:{
        fontSize:12,
        fontWeight:'400',
        lineHeight:15.72,
        color:'#6B50F6'
      },
      viewListItem:{
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:25,
        paddingRight:25,
        flexDirection:'row',
        justifyContent:'space-between'
      },
      viewItem: {
        backgroundColor: 'white',
        borderWidth:1,
        borderColor:'#6B50F6',
        borderRadius: 22,
        shadowColor: 'rgba(90, 108, 234, 0.07)',
        shadowOffset: { width: 12, height: 26 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 5, // Điều chỉnh giá trị để thay đổi độ sâu của bóng đổ (cho Android)
      }
    
    ,viewImage:{
        paddingLeft:21,
        paddingRight:30,
        paddingBottom:17,
        paddingTop:20
    },
    textVegan:{
        fontSize:16,
        fontWeight:'600',
        lineHeight:20.96,
        color:'#22242E',
        textAlign:'center',
        paddingLeft:25,
        paddingRight:25,
        paddingBottom:4
    },
    textMin:{
        fontSize:13,
        paddingBottom:26,
        fontWeight:'400',
        lineHeight:17.03,
        color:'#22242E',
        textAlign:'center',
    }





      
}
  
)  

export default HomeScreen;