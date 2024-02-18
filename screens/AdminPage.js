import {
  Modal,
  RefreshControl,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
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
import { Fontisto } from "@expo/vector-icons";
import Buttons from "../component/Buttons";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useContext, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Context from "../hooks/provider";
import API from "../constant/API";

const AdminPage = ({ route }) => {
  const context = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const navigation = useNavigation();
  const Profile = require("../assets/blue-pancake.jpg");
  const [profileOverlay, setProfileOverlay] = useState(false);
  const handleOverlay = () => {
    setProfileOverlay(!profileOverlay);
  };

  const config = {
    headers: {
      Authorization: `Bearer ${context.token}`,
    },
  };
  const getUser = async () => {
    setLoading(true);
    try {
      const response = await axios.get(API.profile, config);
      console.log(response.data);
      setEmail(response?.data?.result?.email);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headText}>Welcome, Admin...!</Text>
        <View style={styles.profNotify}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Notification");
            }}
          >
            <Ionicons
              name="notifications"
              size={24}
              color="#470440"
              style={styles.notify}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleOverlay}>
            <Image style={styles.profile} source={Profile}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={()=>{
            navigation.navigate("CreateProd")
        }}>
          <View style={styles.Btn}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Create Products
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("ProductPage")}}>
          <View style={styles.Btn}>
            <Text style={{ color: "white", fontSize: 16 }}>
              Available Products
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  heading: {
    marginTop: 40,
    width: "100%",
    height: 50,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headText: {
    fontSize: 25,
    fontWeight: "bold",
    top: 10,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "#470440",
    borderWidth: 3,
  },
  profNotify: {
    flexDirection: "row",
  },
  notify: {
    top: 15,
    paddingRight: 5,
  },
  buttonContainer: {
    justifyContent: "center",
    marginTop: 50,
  },
  Btn: {
    backgroundColor: "#470440",
    alignItems: "center",
    height: 50,
    justifyContent: "center",
    width: 250,
    borderRadius: 30,
    marginVertical: 10,
  },
});
export default AdminPage;
