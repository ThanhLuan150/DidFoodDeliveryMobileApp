import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View ,ImageBackground,StyleSheet, TouchableOpacity, Text, ScrollView,Image, TextInput, FlatList } from "react-native";
import fakeData from "../../Data/Data";
const NotificationScreen = () =>{
    const {notification} = fakeData;
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
      };
    return(
        <ImageBackground source={require('../../assets/Home/Homebackground.png')}style={styles.imageBackground}>
            <ScrollView>
                <TouchableOpacity style={styles.goback} onPress={handleGoBack}>
                    <Image source={require('../../assets/Notification/Group.png')}></Image>
                </TouchableOpacity>
                <View style={styles.viewNotification}>
                    <Text style={styles.textNotification}>Notification</Text>
                </View>
                <FlatList style={styles.viewListNotification}
                    data={ notification}
                    contentContainerStyle={{gap: 10 }}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                    <View style={styles.viewitemNotification} key={item.id}>
                        <Image source={item.image}></Image>
                        <View>
                             <Text style={styles.textYour}>{item.name}</Text>
                             <Text style={styles.textRecently}>{item.actionOrder}</Text>
                        </View>
                     </View>
                    )}
                />
            </ScrollView>
        </ImageBackground>
    )
}
const styles =StyleSheet.create({
    imageBackground:{
        flex:1,
        resizeMode: 'cover'
    },
    goback:{
        paddingTop:38,
        paddingLeft:25,
        paddingRigght:305
    },
    viewNotification:{
        paddingLeft:25,
        paddingTop:19,
        paddingBottom:20
    },
    textNotification:{
        color:'#22242E',
        fontSize:25,
        fontWeight:'800',
        lineHeight:32.76
    },
    viewListNotification:{
        paddingLeft:14,
        paddingRight:14,
        gap:20,
        paddingTop:15
    },
    viewitemNotification:{
        flexDirection:'row',
        backgroundColor: '#FFFFFF',
        gap:20,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:24,
        paddingBottom:23,
        borderColor:'#6B50F6',
        borderWidth:1,
        borderRadius:22
    },
    textYour:{
        color:'#22242E',
        fontSize:15,
        paddingRight:15
    },
    textRecently:{
        paddingTop:4,
        color:'gray',
        fontSize:15,
    }
})
export default NotificationScreen;