import React from "react";
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import fakeData from "../../Data/Data";
const ExploreMenu = () =>{
  const {menus } = fakeData;
  const navigation = useNavigation();
  const handleFilterScreen = () =>{
    navigation.navigate('FilterScreen')
  }
  const handleDetailMenu =(menu) =>{
    navigation.navigate('DetailMenuScreen', { menu } );
  }
    return(
        <ImageBackground source={require('../../assets/Home/Homebackground.png')}style={styles.imageBackground}>
            <ScrollView>
                <View style={styles.viewFiFa}>
                    <View>
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
               <View style={styles.viewNeVi}>
                    <Text style={styles.textNe}>Popular Menu</Text>
                </View>
                <View>
                  <FlatList
                        data={menus}
                        horizontal={false}
                        style={styles.viewListItem}
                        contentContainerStyle={{gap: 31, width:'100%' }}
                        renderItem={({ item }) => (
                          <TouchableOpacity style={styles.viewMenu} key={item.id}  onPress={() => handleDetailMenu(item)}>
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
                          </TouchableOpacity>
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
        flexDirection:'row',
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
      viewListItem:{
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:15,
        paddingRight:15,
        flexDirection:'row',
        width:'100%'
      },
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

export default  ExploreMenu;