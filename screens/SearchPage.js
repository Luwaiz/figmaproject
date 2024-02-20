import { StyleSheet, TextInput, View,TouchableOpacity ,FlatList, ActivityIndicator} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import API from "../constant/API";
import SearchFilter from "../component/SearchFilter";

const SearchPage = () => {
  const navigation=useNavigation()
  const [loading,setLoading]=useState(false)
  const [data,setData]=useState([])
  const [searcher,setSearcher]=useState("")

  const getSearch = async ()=>{
    setLoading(true)
    try{
      const response= await axios.get(API.product)
      //console.log(response?.data?.result?.products)
      setData(response?.data?.result?.products)
      
    }
    catch(e){
      console.log(e)
      setLoading(false)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    getSearch();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search"
          placeholderTextColor={"#635D5D"}
          cursorColor={"#635D5D"}
          onChangeText={(text)=>setSearcher(text)}
          value={searcher}
        />
        <Fontisto
          name="search"
          size={24}
          color="#470440"
          style={styles.searchIcon}
        />
      </View>
      {loading? (<View>
        <ActivityIndicator style={{justifyContent:"center",alignSelf:"center"}} size={"large"} color={"#470440"}/>
      </View>):(<View><SearchFilter data={data} searcher={searcher} setSearcher={setSearcher}/></View>)}
      
    </View>
  );
};

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
  inputContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    borderColor: "#969090",
    borderWidth: 1,
    marginBottom: 5,
  },
  search: {
    width: 350,
    height: 50,
    paddingLeft: 16,
  },
  searchIcon: {
    position: "absolute",
    right: 15,
  },
});
export default SearchPage;
