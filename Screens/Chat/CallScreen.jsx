import React, { useState } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Text, Image, TextInput, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';
const CallScreen = () => {
    const [isMuted, setIsMuted] = useState(false);

    const toggleSpeaker = () => {
        setIsMuted(!isMuted);
    };
    const navigation = useNavigation();
    const handleChatDetailScreen = () => {
        navigation.navigate("ChatDetail");
    }
    return (
        <ImageBackground source={require('../../assets/Message/Pattern.png')} resizeMode="contain" style={styles.container}>
            <View style={{ justifyContent: "center", top: '50%', flexDirection: "row", height: 200 }}>
            </View>
            <View style={{ justifyContent: "center", flexDirection: "row", width: '100%', marginBottom: 60}}>
                <Image style={styles.callavt} source={require('../../assets/Message/CallAvt.png')}></Image>
            </View>
            <View style={{width: '100%' }}>
                <Text style={styles.name}>Richard Lewis</Text>
                <Text style={styles.callstatus}>Ringing...</Text>
            </View>
            <View style={styles.actionContainer}>
                <TouchableOpacity onPress={toggleSpeaker}>
                    <Image style={styles.actionBtn} source={isMuted ? require('../../assets/Message/SpeakerIcon.png') : require('../../assets/Message/MuteIcon.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleChatDetailScreen}>
                    <Image style={styles.actionBtn} source={require('../../assets/Message/CloseIcon.png')}></Image>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignContent: 'center',
    }
    ,
    callavt: {
        height: 160,
        width: 160,
        border: 'solid red 12',
    },
    name: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    },
    callstatus: {
        textAlign: 'center',
        fontSize: 19,
        opacity: 0.5
    },
    actionContainer: {
        position: 'absolute',
        bottom: 65,
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    actionBtn: {
        height: 78,
        width: 78,
        marginLeft: 10,
        marginRight: 10
    }
});
export default CallScreen;