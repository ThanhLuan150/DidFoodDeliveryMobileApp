import React from "react";
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, ScrollView, Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
const ChatDetail = () => {
    const navigation = useNavigation();
    const handleCallScreen = () => {
        navigation.navigate("CallScreen");
    }
    const handleHomeScreen = () => {
        navigation.navigate("Home");
    }
    return (

        <ImageBackground source={require('../../assets/Message/Pattern.png')} resizeMode="contain" style={styles.container}>
            <TouchableOpacity onPress={handleHomeScreen}>
                <Image style={styles.backIcon} source={require('../../assets/Message/IconBack.png')}></Image>
            </TouchableOpacity><View style={{ marginTop: 19, marginBottom: 2, left: 25 }}>
                <Text style={styles.chatText}>Chats</Text>
            </View>
            <View style={styles.person}>
                <Image style={styles.avt} source={require('../../assets/Message/PhotoProfile.png')}></Image>
                <Text style={styles.name}>Louis Kelly</Text>
                <Text style={styles.shortText}><View style={styles.statuspoint}></View> Online</Text>
                <TouchableOpacity style={styles.calllogo} onPress={handleCallScreen}>
                    <Image source={require('../../assets/Message/CallLogo.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={{ margin: 20, width: '100% - 40' }}>
                <View style={[styles.message, styles.friendmessage]}>
                    <Text>Just to order</Text>
                </View>
                <View style={styles.message}>
                    <Text style={styles.textmessage}>Okay, for what level of spiciness?</Text>
                </View>
                <View style={[styles.message, styles.friendmessage]}>
                    <Text>Okay, wait a minutes!</Text>
                </View>
                <View style={styles.message}>
                    <Text style={styles.textmessage}>Okay I'm waiting!</Text>
                </View>
            </View>
            <View style={{ position: "absolute", width: '100%', right: '0%', bottom: 0, backgroundColor: "#F6F6F6"}}>
                <View style={styles.chatInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nhập tin nhắn..."
                    />
                    <TouchableOpacity style={styles.sendBtn} onPress={this.sendMessage}>
                        <Image style={{ height: 24, width: 24 }} source={require('../../assets/Message/IconSend.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
        width: '100%',
    },
    backIcon: {
        height: 45,
        width: 45,
        // position: "absolute",
        marginTop: 38,
        left: 25
    },
    chatText: {
        fontSize: 25,
        fontWeight: "bold",
    },
    statuspoint: {
        width: 9,
        height: 9,
        backgroundColor: "#6B50F6",
        position: "absolute",
        borderRadius: 5,
    },
    person: {
        backgroundColor: "white",
        height: 81,
        margin: 20,
        marginTop: 20,
        marginBottom: 20,
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
    calllogo: {
        position: "absolute",
        top: '25%',
        right: 20,
        width: 40,
        height: 40,

    },
    shortText: {
        position: "absolute",
        left: 87.45,
        bottom: 19,
        fontSize: 14,
        opacity: 0.5
    },
    friendmessage: {
        backgroundColor: "#FEFEFE",
        marginLeft: 0,
        alignSelf: 'flex-start',
    },
    message: {
        height: 41,
        color: "white",
        backgroundColor: "#6B50F6",
        margin: 10,
        marginRight: 0,
        paddingLeft: 12,
        paddingRight: 12,
        alignSelf: 'flex-end',
        justifyContent: "center",
        borderRadius: 13,
        maxWidth: '85%',
    },
    textmessage: {
        color: 'white'
    },
    chatInput: {
        height: 74,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 22,
        justifyContent: "center",
        alignContent: "center",
        display: 'flex',
        flexDirection: 'row',
        width: '100% - 20',
        position: "relative",
    },
    sendBtn: {
        position: "absolute",
        // backgroundColor: 'red',
        height: '100%',
        width: '20%',
        paddingLeft: 20,

        zIndex: 1,
        right: 0,
        bottom: "0",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "flex-end",
    },
    input: {
        position: "absolute",
        width: '80%',
        height: '100%',
        alignSelf: "flex-start",
        left: 15
    },

});
export default ChatDetail;