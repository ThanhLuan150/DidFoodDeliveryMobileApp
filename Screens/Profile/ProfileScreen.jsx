import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const ProfileScreen = ({ navigation }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(!isScrolled);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.profile}>
          <Image
            source={require("../../assets/Profile/PhotoProfile.png")}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Arash Ranjbaran</Text>
          <Text style={styles.profileEmail}>awdesign.ar@gmail.com</Text>
          <Text style={styles.profileVoucher}>
            You Have 3 Voucher
          </Text>
        </View>

        <ScrollView
          onScroll={handleScroll}
          scrollEnabled={isScrolled}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.favorites}>
            <TouchableOpacity
              style={styles.favorite}
              onPress={() => {
                navigation.navigate("Favorite");
              }}
            >
              <Image
                source={require("../../assets/Profile/PhotoProfile.png")}
                style={styles.favoriteImage}
              />
              <Text style={styles.favoriteName}>Spacy fresh crab</Text>
              <Text style={styles.favoritePrice}>
                $35
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    height: 50,
    backgroundColor: "#000000",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  profile: {
    flex: 1,
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 14,
  },
  profileVoucher: {
    fontSize: 14,
    color: "#000000",
  },
  favorites: {
    flex: 1,
    padding: 20,
  },
  favorite: {
    flexDirection: "row",
    alignItems: "center",
  },
  favoriteImage: {
    width: 50,
    height: 50,
  },
  favoriteName: {
    fontSize: 16,
    marginLeft: 10,
  },
  favoritePrice: {
    fontSize: 14,
    color: "#000000",
    marginLeft: 10,
  },
});

export default ProfileScreen;