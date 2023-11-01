import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const Total  = ({ subtotal, discount, delivery }) => {
  const navigation = useNavigation();
  const total = subtotal - discount + delivery;
  const handleConfirmOrder = () =>{
    navigation.navigate('ConfirmOrderScreen')
}
  return (
    <View style={styles.viewBillOrder}>
      <View style={styles.viewBill}>
          <View style={styles.viewSub}>
              <Text style={styles.textSub}>Sub-total</Text>
              <Text style={styles.textSub}>{subtotal}$</Text>
          </View>
          <View style={styles.viewSub}>
              <Text style={styles.textSub}>Discount</Text>
              <Text style={styles.textSub}>{discount}$</Text>
          </View>
          <View style={styles.viewSub}>
                <Text style={styles.textSub}>Delivery</Text>
                <Text style={styles.textSub}>{delivery}$</Text>
          </View>
          <View style={styles.viewTotal}>
                <Text style={styles.textTotal}>Total</Text>
                <Text style={styles.textTotal}>{total}$</Text>
          </View> 
          <View style={styles.viewOrder}>
                <TouchableOpacity style={styles.buttonOrder} onPress={handleConfirmOrder}>
                    <Text style={styles.textPlaceMyOrder}>Place My Order</Text>
                </TouchableOpacity>
          </View>
      </View>
    </View>
  );
}
export default  Total;

const styles = StyleSheet.create({
      viewBillOrder:{
        paddingLeft:14,
        paddingRight:14,
        paddingBottom:18,
        paddingTop:60
    },
    viewBill:{
        backgroundColor:'#6B50F6',
        paddingTop:20,
        paddingBottom:20,
        borderRadius:16
    },
    viewSub:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:29,
        paddingRight:24,
        paddingBottom:2
    },
    textSub:{
        color:'white',
        fontSize:14,
        fontWeight:'500'
    },
    viewTotal:{
        paddingTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:29,
        paddingRight:29
    },
    textTotal:{
        color:'white',
        fontSize:18,
        fontWeight:'500'
    },
    viewOrder:{
      paddingLeft:12,
      paddingRight:12,
      paddingTop:20
  },
  buttonOrder:{
      backgroundColor:'white',
      paddingLeft:106,
      paddingRight:106,
      paddingTop:21,
      paddingBottom:21,
      borderRadius:15
  },
  textPlaceMyOrder:{
      color:'#6B50F6',
      fontSize:14,
      textAlign:'center',
      fontWeight:'600'
  }
});