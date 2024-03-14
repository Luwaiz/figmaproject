import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
  TextInput,
  TouchableOpacity,
  Keyboard
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AvailableProducts from "../../component/AvailableProducts";
import API from "../../constant/API";
import { Ionicons } from '@expo/vector-icons';
import BackBtn from "../../component/BackBtn";
import { Fontisto } from "@expo/vector-icons";
const { height, width } = Dimensions.get("screen");

const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [searchQuery,setSearchQuery]=useState("")

  const getProducts = async () => {
    Keyboard.dismiss()
    setLoading(true);
    try {
      const response = await axios.get(API?.product);
      //console.log(response?.data?.result?.products);
      setProduct(response?.data?.result?.products);
    } catch (e) {
      console.log(e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = product.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={{ alignItems:"center", justifyContent:"center" }}>
          <ActivityIndicator
            style={{ alignSelf: "center" }}
            size={"large"}
            color={"#470440"}
          />
        </View>
      ) : (
        <View>
        <View style={styles.topContainer}>
            <BackBtn/>
        </View>

        <View style={styles.inputContainer}>
        <TextInput
          style={styles.search}
          placeholder="Search"
          placeholderTextColor={"#635D5D"}
          cursorColor={"#635D5D"}
          onChangeText={(text)=>setSearchQuery(text)}
          value={searchQuery}
        />
        <Fontisto
          name="search"
          size={24}
          color="#470440"
          style={styles.searchIcon}
        />
        </View>
        <Text style={{fontSize:20,paddingBottom:10,borderBottomWidth:1}}>Available Products</Text>
        

          <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl colors={["#470440"]}
                onRefresh={() => {
                  setLoading(true);
                  getProducts();
                }}
              />
            }
          >
            <View>
              {filteredProducts.map((item, index) => (
                <View
                  key={index.toString()}
                  style={{ justifyContent: "center" }}
                >
                    <AvailableProducts item={item} index={index}/>
                </View>
              ))}
            </View>
            
          </ScrollView>
          <TouchableOpacity onPress={getProducts} style={{position:"absolute", bottom:10,right:10,backgroundColor:"white",alignItems:"center", borderRadius:100}}><Ionicons name="reload-circle" size={50} color="#470440" /></TouchableOpacity>
        </View>
      )}
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  topContainer: {
    marginTop: 30,
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 6,
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    borderColor: "#969090",
    borderWidth: 1,
    marginBottom: 10,
  },
});
export default ProductPage;
