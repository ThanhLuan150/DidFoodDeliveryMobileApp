import React, { useState, useEffect } from 'react'
import Swipeout from 'react-native-swipeout';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import fakeData from "../../Data/Data";
import Swipeable from 'react-native-swipeable';

const OrderCard = ({ onTotalChange, total }) => {
    const { menus } = fakeData; // Trích xuất danh sách thực đơn từ đối tượng fakeData.

    const [itemQuantities, setItemQuantities] = useState({}); // Tạo state hook để theo dõi số lượng của từng mặt hàng.
    const [menuItems, setMenuItems] = useState(menus); // Tạo state hook để theo dõi danh sách các mặt hàng trong thực đơn.
    
    const decrementQuantity = (itemId) => {
      const currentQuantity = itemQuantities[itemId] || 1; // Lấy số lượng hiện tại hoặc mặc định là 1 nếu không tồn tại.
      const newQuantity = Math.max(1, currentQuantity - 1); // Giảm số lượng, nhưng không được nhỏ hơn 1.
      setItemQuantities({ ...itemQuantities, [itemId]: newQuantity }); // Cập nhật state itemQuantities với số lượng mới.
    };
    
    const incrementQuantity = (itemId) => {
      const currentQuantity = itemQuantities[itemId] || 1; // Lấy số lượng hiện tại hoặc mặc định là 1 nếu không tồn tại.
      if (currentQuantity < 10) {
        const newQuantity = currentQuantity + 1; // Tăng số lượng, nhưng không được lớn hơn 10.
        setItemQuantities({ ...itemQuantities, [itemId]: newQuantity }); // Cập nhật state itemQuantities với số lượng mới.
      }
    };
    
    const handleDeleteItem = (itemId) => {
      const updatedItems = menuItems.filter((item) => item.id !== itemId); // Lọc ra danh sách mới bằng cách loại bỏ mặt hàng có id trùng với itemId.
      setMenuItems(updatedItems); // Cập nhật danh sách menuItems với danh sách mới.
    };
    
    const calculateTotal = () => {
      let total = 0; // Khởi tạo biến tổng giá trị.
      for (const item of menuItems) {
        total += (item.price * (itemQuantities[item.id] || 1)); // Tính tổng giá trị dựa trên giá và số lượng mỗi mặt hàng.
      }
      if (typeof onTotalChange === 'function') {
        onTotalChange(total); // Gọi hàm onTotalChange (nếu nó là một hàm) để cập nhật tổng giá trị.
      }
      return total; // Trả về tổng giá trị.
    };
    
    useEffect(() => {
      const newTotal = calculateTotal(); // Tính toán tổng giá trị mới.
      if (typeof onTotalChange === 'function') {
        onTotalChange(newTotal); // Gọi hàm onTotalChange (nếu nó là một hàm) để cập nhật tổng giá trị.
      }
    }, [itemQuantities, menuItems]); // Hiệu ứng sẽ chạy lại khi itemQuantities hoặc menuItems thay đổi.
    

  const renderItem = (item) => (
    <Swipeout
        right={[
            {
              component: (
                <View style={styles.viewImage}>
                    <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
                        <Image source={require('../../assets/OrderDetails/Icontrash.png')} style={styles.deleteImage} />
                    </TouchableOpacity>
                </View>
                ),
             },
            ]}
            friction={0.3} // Giảm ma sát lướt nó mượt hơn.
            style={styles.Swipeout}
        >
        <View style={styles.viewDetailItem}>
            <View  style={styles.Image}>
                <Image source={item.image} />
            </View>
            <View  style={styles.viewOrderText}>
                <Text style={styles.textSpacy}>{item.nameMenu}</Text>
                <Text style={styles.textWaroenk}>{item.name}</Text>
                <Text style={styles.text$}> {item.price} $</Text>
            </View>
            <View style={styles.viewNumber}>
              <TouchableOpacity style={styles.button} onPress={() => decrementQuantity(item.id)}>
                  <Image source={require('../../assets/OrderDetails/IconMinus.png')}></Image>
              </TouchableOpacity>
              <Text style={styles.TextInput}>{itemQuantities[item.id] || 1}</Text>
              <TouchableOpacity style={styles.button} onPress={() => incrementQuantity(item.id)}>
                  <Image source={require('../../assets/OrderDetails/IconPlus.png')}></Image>
              </TouchableOpacity>
            </View>
        </View>
    </Swipeout>
  );

    
  return (
    <View style={{ paddingLeft:10 ,paddingRight:10,flexDirection:'column',gap:20 }}>
      {menuItems.map((item) => renderItem(item))}
    </View>
  );

  }
  export default  OrderCard;

const styles = StyleSheet.create({
  
  viewOrderDetail:{ 
    paddingTop:19,
    paddingLeft:25,
    paddingRight:190 
 },
 textOrderDetail:{
     color:'#22242E',
     fontSize:25,
     fontWeight:'600',
     lineHeight:32.75
 },
 viewOrderDetailItem:{
     paddingLeft:14,
     paddingRight:14,
     paddingTop:20,
     flexDirection:'column',
     gap:20
 },
 Swipeout:{
     borderRadius:15,
     backgroundColor:'#6B50F6',
 },
 viewImage:{
     backgroundColor:'#6B50F6',
     height:200,
     paddingTop:38,
     paddingRight:38,
     paddingLeft:2
 },
 viewDetailItem:{
     flexDirection:'row',
     backgroundColor:'white',
     justifyContent:'space-between',
     elevation: 2, 
     shadowOpacity: 1,
     shadowRadius: 5 ,
     paddingTop:18,
     paddingBottom:20,
     borderRadius:15,
     paddingLeft:11
 },
 viewOrderText:{
  flexDirection:'column',
    justifyContent:'center'
 },
 textSpacy:{
     color:'#22242E',
     fontSize:15,
     fontWeight:'600',
     lineHeight:19.65
 },
 textWaroenk:{
     color:'gray',
     fontSize:14
 },
 text$:{
     color:'#6B50F6',
     fontSize:19,
     fontWeight:'600',
     marginTop:4
 },
 viewNumber:{
     flexDirection:'row',
     alignItems: 'center',
     justifyContent:'center',
     gap:18,
     paddingRight:20
 },
 button:{
     paddingTop:20
 },
 TextInput:{
     marginTop:21
 },
});