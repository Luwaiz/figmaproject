import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const ProfilePage = ({ navigation, route }) => {
  const { Profile, Username2, Email,Password2 } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ fontSize: 20, color: "#470440" }}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Image source={Profile} style={styles.profilePic} />
        <View style={{ bottom: 40, right: -130 }}>
          <Ionicons name="add-circle-sharp" size={42} color="#470440" />
        </View>
      </View>
      <View style={{ width: 370, alignSelf: "center", }}>
        <View style={styles.Titles}>
          <Text>Username</Text>
          <Text>{Username2}</Text>
        </View>
        <View style={styles.Titles}>
          <Text>Email</Text>
          <Text>{Email}</Text>
          </View>
          <View style={styles.Titles}>
          <Text>Password</Text>
          <Text></Text>
          </View>
          <View style={styles.Titles}>
          <Text>Address</Text>
          <Text></Text>
          </View>
          <View style={styles.Titles}>
          <Text>Phone number</Text>
          <Text></Text>
          </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.31)",
  },
  topContainer: {
    marginTop: 40,
    height: 50,
    width: "100%",
    //backgroundColor:"red",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 6,
    alignItems: "center",
  },
  profilePic: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#470440",
  },
  Titles:{
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 5,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    marginBottom:10
  
  },
});

export default ProfilePage;
