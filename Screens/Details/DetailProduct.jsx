import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
const DetailProduct = ()=>{
    return(
        <ParallaxScrollView
            backgroundColor="transparent"
            contentBackgroundColor="white"
            parallaxHeaderHeight={300}
            renderBackground={() => (
                <Image style={styles.image} source={require('../../assets/DetailProduct/PhotoRestaurant.png')}></Image>
        )}
        >
        <View style={styles.container}>
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
                        <Text style={styles.textkm}>19 km</Text>
                    </View>
                    <View style={styles.viewLoccation}>
                        <Image source={require('../../assets/DetailProduct/IconStar.png')}></Image>
                        <Text style={styles.textkm} >4.8 Rating</Text>
                    </View>
                </View>
                <View style={styles.viewDescription}>
                    <Text style={styles.textDescription}>Most whole Alaskan Red King Crabs get broken down into legs, claws, and lump meat. We offer all of these options as well in our online shop, but there is nothing like getting the whole . . . .</Text>
                </View>
                <View style={styles.viewPopularMenu}>
                    <Text style={styles.textPopularMenu}>Popular Menu</Text>
                    <Text style={styles.textViewMore}>View more</Text>
                </View>
                <View style ={styles.viewListProduct}>
                    <View style={styles.viewItemProduct}>
                        <View style={styles.viewImage}>
                            <Image source={require('../../assets/DetailProduct/image32.png')}></Image>
                        </View>
                        <Text style={styles.textProduct}>Spacy fresh crab</Text>
                        <Text style={styles.textPrice}>12 $</Text>
                    </View>
                    <View style={styles.viewItemProduct}>
                        <View style={styles.viewImage}>
                            <Image source={require('../../assets/DetailProduct/image34.png')}></Image>
                        </View>
                        <Text style={styles.textProduct}>Spacy fresh crab</Text>
                        <Text style={styles.textPrice}>12 $</Text>
                    </View>
                </View>
                <View style={styles.viewPopularMenu}>
                    <Text style={styles.textPopularMenu}>Testimonials</Text>
                </View>
                <View style={styles.viewTes}>
                    <View style={styles.viewitemTes}>
                        <View style={styles.imagee}>
                            <Image  source={require('../../assets/DetailProduct/PhotoProfile.png')}></Image>
                        </View>
                        <View>
                            <View style={styles.viewNameDate}>
                                <View>
                                    <Text style={styles.textnameI}>Dianne Russell</Text>
                                    <Text style={styles.textDateI}>12 April 2021</Text>
                                </View>
                                <TouchableOpacity style={styles.buttonRatting}>
                                    <Image source={require('../../assets/DetailProduct/IconStar1.png')}></Image>
                                    <Text style={styles.textrating}>5</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.viewReview}>
                                <Text style={styles.textReview}>This Is great, So delicious!.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewitemTes}>
                        <View style={styles.imagee}>
                            <Image  source={require('../../assets/DetailProduct/PhotoProfile.png')}></Image>
                        </View>
                        <View>
                            <View style={styles.viewNameDate}>
                                <View>
                                    <Text style={styles.textnameI}>Dianne Russell</Text>
                                    <Text style={styles.textDateI}>12 April 2021</Text>
                                </View>
                                <TouchableOpacity style={styles.buttonRatting}>
                                    <Image source={require('../../assets/DetailProduct/IconStar1.png')}></Image>
                                    <Text style={styles.textrating}>5</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.viewReview}>
                                <Text style={styles.textReview}>This Is great, So delicious!.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.viewitemTes}>
                        <View style={styles.imagee}>
                            <Image  source={require('../../assets/DetailProduct/PhotoProfile.png')}></Image>
                        </View>
                        <View>
                            <View style={styles.viewNameDate}>
                                <View>
                                    <Text style={styles.textnameI}>Dianne Russell</Text>
                                    <Text style={styles.textDateI}>12 April 2021</Text>
                                </View>
                                <TouchableOpacity style={styles.buttonRatting}>
                                    <Image source={require('../../assets/DetailProduct/IconStar1.png')}></Image>
                                    <Text style={styles.textrating}>5</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.viewReview}>
                                <Text style={styles.textReview}>This Is great, So delicious!.</Text>
                            </View>
                        </View>
                    </View>
                    <View></View>
                </View>
            </ScrollView>
        </View>
        </ParallaxScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
      },
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
        gap:20,
        paddingLeft:30,
        paddingTop:20,
        paddingBottom:20
    },
    viewLoccation:{
        flexDirection:'row',
        gap:10
    },
    textkm:{
        color:'gray',
        fontSize:14,
        fontWeight:'400'
    },
    viewDescription:{
        paddingLeft:33,
        paddingRight:30,
        paddingBottom:20
    },
    textDescription:{
        color:'#22242E',
        fontSize:12.5,
        lineHeight:21.66
    },
    viewPopularMenu:{
        paddingLeft:33,
        paddingRight:32,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textPopularMenu:{
        color:'#22242E',
        fontSize:15,
        fontWeight:'600',
        lineHeight:19.65
    },
    textViewMore:{
        color:'#6B50F6',
        fontSize:12,
        fontWeight:'400',
        lineHeight:15.72
    },
    viewListProduct:{
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:20,
        flexDirection:'row',
        gap:20
    },
    viewItemProduct:{
        backgroundColor:'white',
        elevation: 2, 
        shadowOpacity: 1,
        shadowRadius: 5 ,
        borderRadius:22
    },
    viewImage:{
        paddingTop:25,
        paddingLeft:38,
        paddingRight:38,
        paddingBottom:16
    },
    textProduct:{
        color:'#22242E',
        fontSize:15,
        fontWeight:'500',
        paddingLeft:14,
        paddingRight:14,
        lineHeight:19.65,
    },
    textPrice:{
        fontSize:13,
        fontWeight:'400',
        color:'gray',
        paddingLeft:61,
        paddingRight:61,
        paddingBottom:14
    },
    viewTes:{
        paddingTop:20,
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'column',
        gap:20
    },
    viewitemTes:{
        backgroundColor:'white',
        elevation: 2, 
        shadowOpacity: 1,
        shadowRadius: 5 ,
        borderRadius:22,
        paddingLeft:10,
        paddingTop:10,
        paddingBottom:19,
        flexDirection:'row',
        gap:21
    },
    viewNameDate:{
        flexDirection:'row',
        gap:59
    },
    textnameI:{
        color:'#22242E',
        fontSize:15,
        fontWeight:'600',
        lineHeight:19.65
    },
    textDateI:{
        color:'gray',
        fontWeight:'400',
        fontSize:12
    },
    buttonRatting:{
        backgroundColor:'whitesmoke',
        paddingTop:9,
        paddingLeft:10,
        paddingRight:10,
        borderRadius:18,
        flexDirection:'row',
        gap:5
    },
    textrating:{
        color:'#6B50F6',
        fontSize:16,
        fontWeight:'600',
        marginBottom:8
    },
    viewReview: {
        paddingRight: 28,
    },
    textReview: {
        color: '#22242E',
        fontSize: 12.5,
        lineHeight: 21.66,
        flexWrap: 'wrap', // Cho phép văn bản tự động xuống hàng
    }
})
export default DetailProduct;