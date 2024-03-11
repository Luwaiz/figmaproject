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
import { FontAwesome5 } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, useContext, useEffect } from "react";
import VSlider from "../component/vslider";
import HSlider from "../component/HSlider";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Context from "../hooks/provider";
import API from "../constant/API";

const LandingPage = ({ route, CatImage, CatName, ...props }) => {
  const context = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const { Email, Username2, Password2 } = route?.params;
  const navigation = useNavigation();
  const Profile = require("../assets/blue-pancake.jpg");
  const [profileOverlay, setProfileOverlay] = useState(false);

  const handleProfile = () => {
    setProfileOverlay(!profileOverlay);
  };

  
  const NavigateToProfilePage = () => {
    navigation.navigate("ProfilePage", {
      Profile,
      email,
      Username2,
      Password2,
    });
  };
  const NavigateToCart = () => {
    navigation.navigate("CartPage");
  };

  const [Percentage, setPercentage] = useState(
    "Get 50% off on these new menus"
  );

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
        <Text style={styles.headText}>Welcome, {email.slice(0, -10)}!</Text>
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
          <TouchableOpacity onPress={handleProfile}>
            <Image style={styles.profile} source={Profile}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search"
          placeholderTextColor={"#635D5D"}
          cursorColor={"#635D5D"}
        />
        <Fontisto
          name="search"
          size={24}
          color="#470440"
          style={styles.searchIcon}
        />
      </View>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            colors={["#470440"]}
            tintColor={"#470440"}
            onRefresh={() => {
              getUser();
            }}
          />
        }
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.Percent}>{Percentage}</Text>
        <ScrollView
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <HSlider
            PromoName={"Blueberry Pancakes"}
            VImage={require("../assets/blue-pancake.jpg")}
          />
          <HSlider
            PromoName={"Raspberry Pancakes"}
            VImage={require("../assets/rasp-pancake.jpg")}
          />
          <HSlider
            PromoName={"Cream Coffee"}
            VImage={require("../assets/coffee.jpg")}
          />
        </ScrollView>

        <View style={styles.categoryCont}>
          <Text style={styles.categoryTxt}>Categories</Text>
        </View>
        <ScrollView style={{ marginBottom: 40 }}>
          <VSlider
            CatImage={require("../assets/Ice-cream.jpg")}
            CatName={"Desserts"}
            {...props}
          />
          <VSlider
            CatImage={require("../assets/continental.jpg")}
            CatName={"Main Dishes"}
            {...props}
          />
          <VSlider
            CatImage={require("../assets/cocktails.jpg")}
            CatName={"Cocktails"}
            {...props}
          />
          <VSlider
            CatImage={require("../assets/blue-pancake.jpg")}
            CatName={"Others"}
            {...props}
          />
        </ScrollView>
      </ScrollView>

      {/* bottom navbar */}
      <View style={styles.Taskbar}>
        <TouchableOpacity onPress={NavigateToProfilePage}>
          <Ionicons name="person-sharp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("SearchPage")}}>
          <Fontisto name="search" size={24} color="white" />
        </TouchableOpacity>
        <MaterialCommunityIcons name="home-outline" size={35} color="white" />
        <TouchableOpacity onPress={NavigateToCart}>
          <FontAwesome5 name="shopping-cart" size={23} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate("SettingsPage")}}>
          <Foundation name="list" size={25} color="white" />
        </TouchableOpacity>
       
      </View>

     

      {/* profile picture overlay */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={profileOverlay}
        onRequestClose={() => {
          setProfileOverlay(false);
        }}
      >
        <TouchableWithoutFeedback onPress={handleProfile}>
          <View
            style={[
              styles.container,
              { backgroundColor: "rgba(0,0,0,0.7)", justifyContent: "center" },
            ]}
          >
            <View>
              <Image style={styles.profileOverlay} source={Profile} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  inputContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    borderColor: "#969090",
    borderWidth: 1,
    
  },
  search: {
    width: 370,
    height: 50,
    paddingLeft: 16,
  },
  searchIcon: {
    position: "absolute",
    right: 15,
  },
  categoryTxt: {
    fontWeight: "bold",
    fontSize: 25,
  },
  categoryCont: {
    paddingVertical: 15,
    paddingRight: 240,
  },
  Percent: {
    paddingTop: 20,
    marginLeft: -140,
  },
  Taskbar: {
    width: "100%",
    height: 54,
    backgroundColor: "#470440",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius:24,
    borderTopRightRadius:24,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    alignItems: "center",
  },
  profileOverlay: {
    alignSelf: "center",
    width: 300,
    height: 300,
    borderWidth: 2,
    borderRadius: 150,
    borderColor: "#470440",
  },
});
export default LandingPage;
