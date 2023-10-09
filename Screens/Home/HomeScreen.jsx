import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () =>{
  const products = [
    { id: 1,
      image: require('../../assets/Home/mage.png'), 
      nameProduct: 'Vegan Resto', 
      min:'12 min' 
    },
    { id: 2,
      image: require('../../assets/Home/Heaththy.png'), 
      nameProduct: 'Vegan Resto',
      min:'13 min' 
    },
    { id: 3,
      image: require('../../assets/Home/luamach.png'), 
      nameProduct: 'Vegan Resto', 
      min:'14 min' 
    },
    { id: 4,
      image: require('../../assets/Home/mage.png'), 
      nameProduct: 'Vegan Resto', 
      min:'12 min' 
    },
    { id: 5,
      image: require('../../assets/Home/Heaththy.png'), 
      nameProduct: 'Vegan Resto',  
      min:'13 min' 
    },
    { id: 6,
      image: require('../../assets/Home/luamach.png'), 
      nameProduct: 'Vegan Resto',  
      min:'14 min' 
    },
  ];
  const Menu =[
    { id: 1,
      image: require('../../assets/Home/MenuPhoto.png'), 
      nameMenu: 'Herbar Pancake',
      name:'Warung Herbal',
      price:'$7' 
    },
    { id: 2,
      image: require('../../assets/Home/Menu.png'), 
      nameMenu: 'Fruit Salad', 
      name:'Wijie Resto',
      price:'$5' 
    },
    { id: 3,
      image: require('../../assets/Home/Photo.png'), 
      nameMenu: 'Green  Noddle',
      name:'Noodle Home',
      price:'$15' 
    },
  ]
  const navigation = useNavigation();
    const handleExploreRestaurant  = () => {
        navigation.navigate('ExploreRestaurant'); 
      };
    const handleExploreMenu  = () => {
        navigation.navigate('ExploreMenu'); 
      };
    const handleFilterScreen = () =>{
      navigation.navigate('FilterScreen')
    }
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
                        <TouchableOpacity style={styles.textInput} placeholder="What do you want to order" onPress={handleFilterScreen}/>
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
                    <Text style={styles.textviewMore}onPress={handleExploreRestaurant}>View More</Text>
                </View>
                <FlatList
                      data={products}
                      horizontal={true}
                      style={styles.viewListItem}
                      contentContainerStyle={{gap: 10 }}
                      renderItem={({ item }) => (
                        <View style={styles.viewItem} key={item.id}>
                          <View style={styles.viewImage}>
                            <Image source={item.image} />
                          </View>
                          <Text style={styles.textVegan}>{item.nameProduct}</Text>
                          <Text style={styles.textMin}>{item.min}</Text>
                        </View>
                      )}
                />
               <View style={styles.viewNeVi}>
                    <Text style={styles.textNe}>Popular Menu</Text>
                    <Text style={styles.textviewMore} onPress={handleExploreMenu }>View More</Text>
                </View>
                <View>
                  <FlatList
                        data={Menu}
                        horizontal={false}
                        style={styles.viewListItem}
                        contentContainerStyle={{gap: 31, width:'100%' }}
                        renderItem={({ item }) => (
                          <View style={styles.viewMenu} key={item.id}>
                            <View style={styles.viewImageMenu}>
                              <Image source={item.image} />
                              <View style={styles.viewTexts}>
                                <Text style={styles.textmenu}>{item.nameMenu}</Text>
                                <Text style={styles.textName}>{item.name}</Text>
                              </View>
                            </View>
                            <View style={styles.viewPrice}>
                                <Text style={styles.textPrice}>{item. price}</Text>
                            </View>
                          </View>
                        )}
                  />
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
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
        
      },
      viewSpTou:{
        position:'absolute',
      },
      viewSpecial:{
        paddingTop:30,
        paddingLeft:185
      },
      textSpecial:{
        fontSize:17,
        fontWeight:'600',
        lineHeight:22.27,
        color:'white'
      },
      viewbutton:{
        paddingLeft:185,
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
        color: '#6B50F6',
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
        paddingLeft:15,
        paddingRight:15,
        flexDirection:'row',
        width:'100%'
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
    } ,
    viewMenu:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor: 'white',
      borderWidth:1,
      borderColor:'#6B50F6',
      borderRadius: 22,
      shadowColor: 'rgba(90, 108, 234, 0.07)',
      shadowOffset: { width: 12, height: 26 },
      shadowOpacity: 1,
      shadowRadius: 50,
      elevation: 5, // Điều chỉnh giá trị để thay đổi độ sâu của bóng đổ (cho Android)
      paddingLeft:10,
      paddingTop:12,
      paddingBottom:12,
      paddingRight:29
    } ,
    viewImageMenu:{
        flexDirection:'row',
        gap:21,
        
    } ,
    viewTexts:{
      paddingTop:13
    },
    textmenu:{
      fontSize:15,
      fontWeight:'500',
      lineHeight:19.46,
      color:'#22242E'
    },
    textName:{
      fontSize:13,
      color:'gray',
      fontWeight:'400',
    },
    viewPrice:{
      paddingTop:18,
      paddingBottom:20,
      
    },
    textPrice:{
      fontSize:22,
      fontWeight:'600',
      color:'#6B50F6',
      lineHeight:28.83
    }
}
  
)  

export default HomeScreen;