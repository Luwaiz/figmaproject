import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React,{useContext, useEffect, useState} from "react";
import Context from "../../hooks/provider";
import API from "../../constant/API";
import axios from "axios";

const ProfilePage = ({ navigation, route }) => {

  //const { email,Username2,Password2 } = route.params;
  const [profileOverlay, setProfileOverlay] = useState(false);
  const handleOverlay = () => {
    setProfileOverlay(!profileOverlay);
  };
  const context = useContext(Context);
  const [loading, setLoading] = useState(false);
  const [email,setEmail]=useState("")
  
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
      <View style={styles.topContainer}>
      <TouchableOpacity>
          <Text style={{ fontSize: 20, color: "#470440" }}>Edit</Text>
        </TouchableOpacity>
      </View>

      {loading?(<ActivityIndicator color={"#470440"} size={"large"}/>):(
        <>
        <View style={{ marginBottom: 20 }}>
        <View style={{ bottom: 40, right: -130 }}>
          <Ionicons name="add-circle-sharp" size={42} color="#470440" />
        </View>
      </View>
      <View style={{ width: "100%", alignSelf: "center", paddingHorizontal:10}}>
        <View style={styles.Titles}>
          <Text>Username</Text>
          <Text>{email}</Text>
        </View>
        <View style={styles.Titles}>
          <Text>Email</Text>
          <Text></Text>
          </View>
          <View style={styles.Titles}>
          <Text>Password</Text>
          <Text></Text>
          </View>
          <View style={[styles.Titles,{maxHeight:200}]}>
          <Text>Address</Text>
          <Text></Text>
          </View>
          <View style={styles.Titles}>
          <Text>Phone number</Text>
          <Text></Text>
          </View>
      </View>
      <View style={{bottom:0,position:"absolute",alignItems:"center",}}>
        <Text style={{marginBottom:12,fontSize:14}}>Note: Changes can only be edited after 20 days</Text>
        <View style={{height:100,width:340,alignSelf:"center",borderTopWidth:2,borderTopColor:"#470440"}}></View>
      </View></>)}
    
      <Modal
        animationType="fade"
        transparent={true}
        visible={profileOverlay}
        onRequestClose={() => {
          setProfileOverlay(false);
        }}
      >
        <TouchableWithoutFeedback onPress={handleOverlay}>
          <View
            style={[
              styles.container,
              { backgroundColor: "rgba(0,0,0,1)", justifyContent: "center" },
            ]}
          >
            <View>
              <Image style={styles.profileOverlay} />
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
    alignItems: "center",
    backgroundColor: "white",
  },
  topContainer: {
    marginTop: 30,
    height: 50,
    width: "100%",
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
    marginBottom:10,
    borderColor:"#470440"
  },
  profileOverlay: {
    alignSelf: "center",
    width:400,
    height:400,
    borderWidth: 2,
  },
});

export default ProfilePage;
