import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { useNavigation } from '@react-navigation/native';
const ProfileScreen = () => {
  const [userData, setUserData] = useState(null);
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate('SignIn'); 
  };
  useEffect(() => {
    fetch('https://63a5721a318b23efa793a770.mockapi.io/api/users')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data[0]); // Assuming the first user from the API response
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <>
      {userData && (
    <ParallaxScrollView
      backgroundColor="transparent"
      contentBackgroundColor="white"
      parallaxHeaderHeight={300}
      renderBackground={() => (
        <Image style={styles.Image} source={{ uri: userData.image  }} />
      )}
    >
      <View style={styles.container}>
        <ScrollView style={styles.ScrollView}>
          <View style={styles.viewScrollView}>
            <TouchableOpacity style={styles.ScrollTool}></TouchableOpacity>
          </View>
              <View style={styles.viewButtonMember}>
                <TouchableOpacity style={styles.ButtonMember}>
                  <Text style={styles.textMember}>Member Gold</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ButtonMember} onPress={handleLogout}>
                  <Text style={styles.textMember}>Logout</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewNameProfile}>
                <Text style={styles.textNameProfile}>{userData.name}</Text>
                <TouchableOpacity style={styles.TouchableOpacity}>
                  <Image source={require('../../assets/Profile/EditIcon.png')} />
                </TouchableOpacity>
              </View>
              <Text style={styles.textEmail}>{userData.email}</Text>
              <View style={styles.viewVoucher}>
                <View style={styles.viewVoucherItem}>
                  <Image source={require('../../assets/Profile/VoucherIcon.png')} />
                  <Text style={styles.textVoucher}>You have 3 Voucher</Text>
                </View>
              </View>
              <View style={styles.viewFavorite}>
                <Text style={styles.textFavorite}>Favorite</Text>
              </View>
              <View style={styles.viewListFavorite}>
            <View style={styles.viewListItemFavorite}>
              <Image source={require('../../assets/Profile/PhotoMenu1.png')} />
              <View style={styles.viewContent}>
                <Text style={styles.textFavorite}>Spicy fresh crab</Text>
                <Text style={styles.textWaroenk}>Waroenk kita</Text>
                <Text style={styles.textPrice}>$ 35</Text>
              </View>
              <View style={styles.viewButtonBuyAgain}>
                <TouchableOpacity style={styles.ButtonBuyAgain}>
                  <Text style={styles.textBuyAgain}>Buy Again</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.viewListItemFavorite}>
              <Image source={require('../../assets/Profile/PhotoMenu2.png')} />
              <View style={styles.viewContent}>
                <Text style={styles.textFavorite}>Spicy fresh crab</Text>
                <Text style={styles.textWaroenk}>Waroenk kita</Text>
                <Text style={styles.textPrice}>$ 35</Text>
              </View>
              <View style={styles.viewButtonBuyAgain}>
                <TouchableOpacity style={styles.ButtonBuyAgain}>
                  <Text style={styles.textBuyAgain}>Buy Again</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.viewListItemFavorite}>
              <Image source={require('../../assets/Profile/PhotoMenu.png')} />
              <View style={styles.viewContent}>
                <Text style={styles.textFavorite}>Spicy fresh crab</Text>
                <Text style={styles.textWaroenk}>Waroenk kita</Text>
                <Text style={styles.textPrice}>$ 35</Text>
              </View>
              <View style={styles.viewButtonBuyAgain}>
                <TouchableOpacity style={styles.ButtonBuyAgain}>
                  <Text style={styles.textBuyAgain}>Buy Again</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.viewListItemFavorite}>
              <Image source={require('../../assets/Profile/PhotoMenu.png')} />
              <View style={styles.viewContent}>
                <Text style={styles.textFavorite}>Spicy fresh crab</Text>
                <Text style={styles.textWaroenk}>Waroenk kita</Text>
                <Text style={styles.textPrice}>$ 35</Text>
              </View>
              <View style={styles.viewButtonBuyAgain}>
                <TouchableOpacity style={styles.ButtonBuyAgain}>
                  <Text style={styles.textBuyAgain}>Buy Again</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View> 
        </ScrollView>
      </View>
    </ParallaxScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  Image:{
    width:'100%',
    height: 350, 
  },
  ScrollView:{
    backgroundColor:'white',
    borderRadius:30,
  },
  viewScrollView:{
    paddingLeft:160,
    paddingRight:160,
    paddingTop:18
  },
  ScrollTool:{
    backgroundColor:'#FEF6ED',
    width:'100%',
    height:5,
    borderRadius:12
  },
  viewButtonMember:{
    paddingLeft:20,
    paddingRight:257,
    paddingTop:28,
    flexDirection:'row',
    justifyContent:'space-between',
    gap:130
  },
  ButtonMember:{
    backgroundColor:'rgba(0, 255, 102, 0.10)',
    paddingLeft:17,
    paddingRight:17,
    paddingTop:10,
    paddingBottom:10,
    borderRadius:18
  },
  textMember:{
    color:'#6B50F6',
    fontSize:12,
    fontWeight:'500'
  },
  viewNameProfile:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:20,
    paddingLeft:21,
    paddingRight:32
  },
  textNameProfile:{
    color:'#22242E',
    fontSize:27,
    fontWeight:"600",
  },
  TouchableOpacity:{
    marginTop:10
  },
  textEmail:{
    color:'gray',
    paddingLeft:21,
    paddingTop:4
  },
  viewVoucher:{
    paddingTop:20,
    paddingLeft:15,
    paddingRight:15
  },
  viewVoucherItem:{
    flexDirection:'row',
    gap:16,
    backgroundColor:'white',
    elevation: 2, 
    shadowOpacity: 1,
    shadowRadius: 5 ,
    paddingBottom:8,
    borderRadius:22,
    paddingTop:16,
    paddingLeft:16
  },
  textVoucher:{
    marginTop:7,
    marginBottom:7,
    color:'#22242E',
    fontSize:14,
    fontWeight:'500'
  },
  viewFavorite:{
    paddingTop:20,
    paddingLeft:34,
    paddingRight:283
  },
  textFacevorite:{
    color:'#22242E',
    fontSize:15,
    fontWeight:'600'
  },
  viewListFavorite:{
    paddingTop:20,
    paddingLeft:15,
    paddingRight:15,
    flexDirection:'column',
    gap:20
  },
  viewListItemFavorite:{
    flexDirection:'row',
    paddingLeft:14,
    paddingRight:17,
    paddingTop:21,
    paddingBottom:21,
    borderRadius:22,
    backgroundColor:'white',
    elevation: 2, 
    shadowOpacity: 1,
    shadowRadius: 5 ,
  },
  viewContent:{
    paddingLeft:17.45
  },
  textFavorite:{
    color:'#22242E',
    fontSize:15,
    fontWeight:'600',
    lineHeight:19.65
  },
  textWaroenk:{
    color:'gray',
    fontSize:14
  },
  textPrice:{
    color:'#6B50F6',
    fontSize:19,
    fontWeight:'600',
    marginTop:4
  },
  viewButtonBuyAgain:{
    marginTop:17,
    paddingLeft:32
  },
  ButtonBuyAgain:{
    backgroundColor:'#6B50F6',
    paddingTop:9,
    paddingBottom:9,
    paddingLeft:12,
    paddingRight:12,
    borderRadius:17.50
  },
  textBuyAgain:{
    color:'white',
    fontSize:12,
    fontWeight:'500',
  }
});

export default ProfileScreen;