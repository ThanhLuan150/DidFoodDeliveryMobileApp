import React from "react";
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
const CallScreen = () => {
    const navigation = useNavigation();
    const handleChatDetailScreen = () => {
        navigation.navigate("ChatDetail");
    }
    const handleHomeScreen = () => {
        navigation.navigate("Home");
    }
    return (
        <ImageBackground source={require('../../assets/Message/Pattern.png')} resizeMode="contain" style={{ width: '100%', flex: 1 }}>
            <TouchableOpacity onPress={handleHomeScreen}>
                <Image style={styles.backIcon} source={require('../../assets/Message/IconBack.png')}></Image>
            </TouchableOpacity>
            <View style={{ marginTop: 19, marginBottom: 2, left: 25 }}>
                <Text style={styles.chatText}>Chats</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.person} onPress={handleChatDetailScreen}>
                    <Image style={styles.avt} source={require('../../assets/Message/PhotoProfile.png')}></Image>
                    <Text style={styles.name}>Louis Kelly</Text>
                    <Text style={styles.time}>20:00</Text>
                    <Text style={styles.shortText}>Your Order Just Adrrived!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.person}>
                    <Image style={styles.avt} source={require('../../assets/Message/PhotoProfile(1).png')}></Image>
                    <Text style={styles.name}>Paul Koch</Text>
                    <Text style={styles.time}>20:00</Text>
                    <Text style={styles.shortText}>Your Order Just Adrrived!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.person}>
                    <Image style={styles.avt} source={require('../../assets/Message/PhotoProfile(2).png')}></Image>
                    <Text style={styles.name}>Carla Klein</Text>
                    <Text style={styles.time}>20:00</Text>
                    <Text style={styles.shortText}>Your Order Just Adrrived!</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    backIcon: {
        height: 45,
        width: 45,
        marginTop: 38,
        left: 25
    },
    chatText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    person: {
        backgroundColor: "white",
        height: 81,
        margin: 20,
        marginTop: 10,
        marginBottom: 10,
        position: "relative",
        borderRadius: 22
    },
    avt: {
        margin: 10,
        marginLeft: 8,
        height: 62,
        width: 62,
    },
    name: {
        position: "absolute",
        top: 20,
        left: 87.45,
        fontSize: 15
        ,
        fontWeight: 'bold'
    },
    time: {
        position: "absolute",
        top: 20,
        right: 12,
        fontSize: 14,
        opacity: 0.5
    },
    shortText: {
        position: "absolute",
        left: 87.45,
        bottom: 19,
        fontSize: 14,
        opacity: 0.5
    }
});
export default CallScreen;