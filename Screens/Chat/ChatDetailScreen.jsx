import React, {useState} from "react";
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, ScrollView, Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
const ChatDetail = () => {
  const route = useRoute();
  const { chat } = route.params;
  const navigation = useNavigation();

  // Khởi tạo state để lưu tin nhắn mới và lịch sử trò chuyện
  const [messageInput, setMessageInput] = useState(""); // Lưu nội dung tin nhắn mới
  const [chatHistory, setChatHistory] = useState([...chat.chatHistory]);  // Lưu lịch sử trò chuyện


  const handleCallScreen = () => {
    navigation.navigate("CallScreen");
  };

  const handleHomeScreen = () => {
    navigation.navigate("Home");
  };

// Gửi tin nhắn mới
  const sendMessage = () => {
    // Tạo một tin nhắn mới với người gửi là 'user' và nội dung là messageInput
    const newMessage = { sender: 'user', text: messageInput };
    const updatedChatHistory = [...chatHistory, newMessage];
    setChatHistory(updatedChatHistory); // Cập nhật trạng thái với lịch sử trò chuyện mới bao gồm tin nhắn vừa gửi

    setMessageInput(""); // Xóa nội dung trong ô nhập sau khi gửi
  };
    return (

        <ImageBackground source={require('../../assets/Message/Pattern.png')} resizeMode="contain" style={styles.container}>
            <TouchableOpacity onPress={handleHomeScreen}>
                <Image style={styles.backIcon} source={require('../../assets/Message/IconBack.png')}></Image>
            </TouchableOpacity><View style={{ marginTop: 19, marginBottom: 2, left: 25 }}>
                <Text style={styles.chatText}>Chats</Text>
            </View>
            <View style={styles.person}>
                <Image style={styles.avt} source={chat.avatar}></Image>
                <Text style={styles.name}>{chat.name}</Text>
                <Text style={styles.shortText}><View style={styles.statuspoint}></View>   {chat.status}</Text>
                <TouchableOpacity style={styles.calllogo} onPress={handleCallScreen}>
                    <Image source={require('../../assets/Message/CallLogo.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={{ margin: 20, width: '100% - 40' }}>
            <FlatList
                data={chatHistory}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                <View style={[styles.message, item.sender === 'friend' ? styles.friendmessage : styles.userMessage]}>
                    <Text >{item.text}</Text>
                </View>
                )}
                 />
            </View>
            <View style={{ position: "absolute", width: '100%', right: '0%', bottom: 0, backgroundColor: "#F6F6F6"}}>
                <View style={styles.chatInput}>
                    <TextInput
                    style={styles.input}
                    placeholder="Nhập tin nhắn..."
                    value={messageInput}
                    onChangeText={(text) => setMessageInput(text)}
                    />
                    <TouchableOpacity style={styles.sendBtn} onPress={sendMessage}>
                    <Image style={{ height: 24, width: 24 }} source={require('../../assets/Message/IconSend.png')} />
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