import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
const DetailProduct = ()=>{
    return(
        <View>
            <Image style={styles.image} source={require('../../assets/DetailProduct/PhotoRestaurant.png')}></Image>
            <ScrollView>
                <View style={styles.viewScroll}>
                    <TouchableOpacity style={styles.Scroll}></TouchableOpacity>
                </View>
                <View style={styles.viewFunction}>
                    <TouchableOpacity style={styles.buttonPopular}>
                        <Text style={styles.textPopular}>Popular</Text>
                    </TouchableOpacity>
                    <View style={styles.viewFunctionWishListLocation}>
                        <Image source={require('../../assets/DetailProduct/IconLocation.png')}></Image>
                        <Image source={require('../../assets/DetailProduct/IconLove.png')}></Image>
                    </View>
                </View>
                <View style={styles.viewName}>
                    <Text style={styles.textName}>Wijie Bar and Resto</Text>
                </View>
                <View style={styles.viewFeedback}>
                    <View style={styles.viewLoccation}>
                        <Image source={require('../../assets/DetailProduct/Iconmappin.png')}></Image>
                        <Text>19 km</Text>
                    </View>
                    <View style={styles.viewLoccation}>
                        <Image source={require('../../assets/DetailProduct/IconStar.png')}></Image>
                        <Text>4.8 Rating</Text>
                    </View>
                </View>
                <View style={styles.viewDescription}>
                    <Text style={styles.textDescription}>Most whole Alaskan Red King Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole . . . .</Text>
                </View>
                <View style={styles.viewPopularMenu}>
                    <Text style={styles.textPopular}>Popular Menu</Text>
                    <Text style={styles.textViewMore}>View more</Text>
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        width: '100%'
    },
    viewScroll:{
        paddingTop:18,
        paddingLeft:160,
        paddingRight:160,
        paddingBottom:21
    },
    Scroll:{
        backgroundColor:'#FEF6ED',
        width:'100%',
        height:4,
        borderRadius:12
    },
    viewFunction:{
        paddingLeft:30,
        paddingRight:39,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    buttonPopular:{
        backgroundColor:'rgba(0, 255, 102, 0.10)',
        paddingTop:9,
        paddingBottom:10,
        paddingLeft:17,
        paddingRight:17,
        borderRadius:18.50
    },
    textPopular:{
        color:'#6B50F6',
        fontSize:12,
        fontWeight:'500',
        lineHeight:15.72
    },
    viewFunctionWishListLocation:{
        flexDirection:'row',
        gap:10
    },
    viewName:{
        paddingLeft:33,
        paddingTop:19.5
    },
    textName:{
        color:'#22242E',
        fontSize:27,
        fontWeight:'600',
        lineHeight:35.38
    },
    viewFeedback:{
        flexDirection:'row',
        gap:20
    }
})
export default DetailProduct;