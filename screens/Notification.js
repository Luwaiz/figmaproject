import { StyleSheet, Text, TextInput, View,TouchableOpacity ,FlatList} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CheckMark from "../component/CheckMark";
import BackBtn from "../component/BackBtn";

const Notification = () => {
    const navigation=useNavigation()
  return (
    <View>
    
      <View style={styles.topContainer}>
        <BackBtn/>
        <Ionicons
            name="notifications"
            size={28}
            color="#470440"
          />
      </View>
      <View style={styles.notifications}>
        <TouchableOpacity><View style={styles.notify}><CheckMark/>
        <Text>Your order has arrived!</Text>
        </View></TouchableOpacity>
      </View>
  
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
        alignItems: "center",
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
      notify:{
        backgroundColor:"#898A8D",
        width:360,
        height:50,
        borderRadius:10,
        alignItems:"center",
        paddingHorizontal:10,
        flexDirection:"row"


      },
      notifications:{
        alignItems:"center",
        marginTop:5
      }
})
export default Notification

