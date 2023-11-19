import React, { useState } from "react";
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, ScrollView, Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import fakeData from "../../Data/Data";

const FilterScreen = () => {
      // Sử dụng React Navigation để điều hướng
      const navigation = useNavigation();

      // Khởi tạo state và các hàm xử lý sự kiện
      const { products } = fakeData;  
      const { menus } = fakeData;
      const [searchKeyword, setSearchKeyword] = useState(''); // State cho từ khóa tìm kiếm
      const [searchType, setSearchType] = useState(null); // State cho loại tìm kiếm (menu hoặc product)
      const [searchResults, setSearchResults] = useState([]); // State cho kết quả tìm kiếm
      const [activeTab, setActiveTab] = useState('Menu'); // Thêm state để theo dõi tab đang active
      // const [activeDistance, setActiveDistance] = useState('1 Km'); // State để theo dõi khoảng cách đang chọn
      const [activeLocation, setActiveLocation] = useState(''); // State để theo dõi vị trí đang chọn
      // Hàm xử lý thay đổi từ khóa tìm kiếm
      const handleSearchKeywordChange = (keyword) => {
        setSearchKeyword(keyword);
        // Lọc danh sách menu dựa trên từ khóa
        const menuResults = menus.filter((item) =>
          item.name.toLowerCase().includes(keyword.toLowerCase())
        );
        // Lọc danh sách sản phẩm dựa trên từ khóa
        const productResults = products.filter((item) =>
          item.nameProduct.toLowerCase().includes(keyword.toLowerCase())
        );

        // Kiểm tra và cập nhật state
        if (keyword.trim() === '') {
          setSearchType(null);
          setSearchResults([]);
          return;
        }
        if (menuResults.length > 0) {
          setSearchType('menu');
          setSearchResults(menuResults);
        } else if (productResults.length > 0) {
          setSearchType('product');
          setSearchResults(productResults);
        } else {
          setSearchType(null);
          setSearchResults([]);
        }
      };
     // Hàm xử lý thay đổi tab
      const handleTabChange = (tab) => {
        setActiveTab(tab); // Cập nhật tab được chọn
        setSearchType(tab.toLowerCase()); // Cập nhật loại tìm kiếm dựa trên tab được chọn
        setSearchResults(tab === 'Menu' ? menus : products); // Cập nhật kết quả tìm kiếm dựa trên tab được chọn
      };

      // Hàm xử lý thay đổi vị trí
      const handleLocationChange = (location) => {
        setActiveLocation(location); // Cập nhật vị trí đang chọn
        // Áp dụng bộ lọc theo vị trí đang chọn
        const filteredResults = activeTab === 'Menu'
          ? menus.filter(item => item.location === location)
          : products.filter(item => item.location === location);

        setSearchResults(filteredResults); // Cập nhật kết quả tìm kiếm dựa trên vị trí và tab
      };
      // Hàm xử lý điều hướng đến màn hình thông báo
      const handleNotification = () => {
        navigation.navigate('NotificationScreen');
      };

      // Hàm xử lý điều hướng đến màn hình chi tiết sản phẩm
      const handleDetailProduct = (product) => {
        navigation.navigate('DetailProduct', { product });
      }

      // Hàm xử lý điều hướng đến màn hình chi tiết menu
      const handleDetailMenu = (menu) => {
        navigation.navigate('DetailMenuScreen', { menu });
      }
     
  return (
    <ImageBackground source={require('../../assets/Home/Homebackground.png')} style={styles.imageBackground}>
      <ScrollView>
        <View style={styles.viewFiFa}>
          <View>
            <Text style={styles.textFine}>Find Your</Text>
            <Text style={styles.textFine}>Favorite Food</Text>
          </View>
          <TouchableOpacity onPress={handleNotification}>
            <Image source={require('../../assets/Home/Notification.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.viewSearch}>
          <View style={styles.viewsearch}>
            <Image source={require('../../assets/Home/Search.png')} style={{ position: 'relative', left: 50, top: 13 }}></Image>
            <TextInput style={styles.textInput} placeholder="What do you want to order" value={searchKeyword} onChangeText={handleSearchKeywordChange} />
          </View>
          <Image source={require('../../assets/Home/FilterIcon.png')}></Image>
        </View>
        <View style={styles.viewType}>
          <Text style={styles.textType}>Type</Text>
        </View>
        <View style={styles.viewListType}>
        <TouchableOpacity
            style={[styles.button, activeTab === 'Product' && styles.activeTab]}
            onPress={() => handleTabChange('Product')}
          >
            <Text style={styles.textRes}>Product</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, activeTab === 'Menu' && styles.activeTab]}
            onPress={() => handleTabChange('Menu')}
          >
            <Text style={styles.textRes}>Menu</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewType}>
          <Text style={styles.textType}>Location</Text>
        </View>
        <View style={styles.viewListType}>
        <TouchableOpacity
            style={[styles.button, activeLocation === '9 km' && styles.activeButton]}
            onPress={() => handleLocationChange('9 km')}
          >
            <Text style={styles.textRes}>9 Km</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, activeLocation === '10 km' && styles.activeButton]}
            onPress={() => handleLocationChange('10 km')}
          >
            <Text style={styles.textRes}>10 Km</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, activeLocation === '19 km' && styles.activeButton]}
            onPress={() => handleLocationChange('19 km')}
          >
            <Text style={styles.textRes}>19 Km</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewListType}>
          {searchType === 'product' && (
            <FlatList
              data={searchResults}
              horizontal={false}
              numColumns={2}
              style={styles.viewListItem}
              contentContainerStyle={{ flex: 1, width: '100%', flexDirection: 'column', gap: 20, height: 'auto' }}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.viewItem} key={item.id} onPress={() => handleDetailProduct(item)}>
                  <View style={styles.viewImage}>
                    <Image source={item.image} />
                  </View>
                  <Text style={styles.textVegan}>{item.nameProduct}</Text>
                  <Text style={styles.textMin}>{item.min}</Text>
                </TouchableOpacity>
              )}
            />
          )}

          {searchType === 'menu' && (
            <FlatList
              data={searchResults}
              horizontal={false}
              style={styles.viewListItem}
              contentContainerStyle={{ gap: 31, width: '100%' }}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.viewMenu} key={item.id} onPress={() => handleDetailMenu(item)}>
                  <View style={styles.viewImageMenu}>
                    <Image source={item.image} />
                    <View style={styles.viewTexts}>
                      <Text style={styles.textmenu}>{item.nameMenu}</Text>
                      <Text style={styles.textName}>{item.name}</Text>
                    </View>
                  </View>
                  <View style={styles.viewPrice}>
                    <Text style={styles.textPrice}>{item.price}</Text>
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles =StyleSheet.create({
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
      viewType:{
        paddingLeft:25,
        paddingBottom:20
      },
      textType:{
        color:'#22242E',
        fontSize:15,
        lineHeight:19.65,
        fontWeight:'400'
      },
      viewListItem:{
        paddingTop:20,
        paddingBottom:20,
        paddingLeft:30,
        paddingRight:30,
        flexDirection:'row',
        width:'100%'
      },
      viewItem: {
        backgroundColor: 'white',
        width:'auto',
        borderWidth:1,
        borderColor:'#6B50F6',
        borderRadius: 22,
        shadowColor: 'rgba(90, 108, 234, 0.07)',
        shadowOffset: { width: 12, height: 26 },
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 5,
        marginRight: 20 
      }
    ,viewImage:{
        paddingLeft:21,
        paddingRight:30,
        paddingBottom:17,
        paddingTop:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
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
        },
      viewListType:{
        paddingLeft: 25,
        flexDirection: 'row',
        flexWrap: 'wrap', // Cho phép các mục tự động xuống hàng khi không đủ không gian
        gap: 20,
        paddingBottom: 20,
        alignItems: 'center', // Căn chỉnh các mục theo trục dọc
        width: '100%' // Đảm bảo rằng View có đủ chiều rộng để chứa 3 mục trên mỗi hàng

      },
      button:{
        backgroundColor:'rgba(0, 255, 102, 0.10)',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:14,
        paddingBottom:14,
        borderRadius:15
      },
      textRes:{
        color:'#6B50F6',
        fontSize:12,
        fontWeight:'500'
      },
      viewbuttonSearch:{
        paddingTop:50,
        paddingLeft:25,
        paddingRight:25
      },
      Search:{
        backgroundColor:'#6B50F6',
        paddingTop:21,
        paddingBottom:21,
        borderRadius:15
      },
      textbuttonSearch:{
        color:'#FEFEFF',
        fontSize:15,
        fontWeight:'500',
        textAlign:'center'
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
})
export default FilterScreen;