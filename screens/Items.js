import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useContext, useState, } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Buttons from "../component/Buttons";
import BackBtn from "../component/BackBtn";
import axios from "axios";
import API from "../constant/API";
import Context from "../hooks/provider";

const Items = ({ route }) => {
  const navigation=useNavigation()
  const context=useContext(Context);
  const [loading,setLoading]=useState(false);
  const { productImage, item } = route.params;
  const [quantity, setQuantity] = useState(0);
  const [productId,setProductId]=useState(item.id);
  const [userId,setUserId]=useState("")

 
  const NavigateToCartPage= async()=>{
    const config = {
      headers: {
        Authorization: `Bearer ${context.token}`,
      },}
    const req={
      quantity: quantity,
      product_id: productId.toString(),
    }
    setLoading(true)
    try{
      const response = await axios.post(API.placeOrder,req)
      console.log(response)
      navigation.navigate("CartPage",{productId,item,quantity})
    }
    catch(e){
      console.log(e)
      setLoading(false)
    }
    finally{
      setLoading(false)
    }
  }
  
  //quantity counter
  const DecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };
  const IncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  

  //favorite button handler
  const [Favorite, setFavorite] = useState("favorite-outline");
  const [FavoriteColor, setNotFavoriteColor] = useState("black");
  const handleFavorite = () => {
    setFavorite(
      Favorite === "favorite-outline" ? "favorite" : "favorite-outline"
    );
    setNotFavoriteColor(FavoriteColor === "black" ? "red" : "black");
  };
  return (
    
    <View style={styles.container}>
      {/* top bar with the back navigation and favorite */}
      <View style={styles.topContainer}>
        <BackBtn/>
        <TouchableOpacity onPress={handleFavorite}>
          <MaterialIcons
            name={Favorite}
            size={30}
            color={FavoriteColor}
            style={styles.FavoriteIcon}
          />
        </TouchableOpacity>
      </View>

      <Image source={productImage} style={styles.itemImage} />
      <Text style={{ marginTop: 27, fontSize: 20, fontWeight: "500" }}>
        {item.name}
      </Text>
      <View style={styles.description}>
        <Text>{item?.description}</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: 300,
          marginTop: 20,
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "500" }}>Price</Text>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>${item.price}</Text>
      </View>

      <View style={styles.contQuantity}>
        <TouchableOpacity onPress={DecreaseQuantity}>
          <Feather name="minus-circle" size={32} color="black" />
        </TouchableOpacity>
        <View style={styles.quantity}>
          <Text style={{ color: "white", fontSize: 16 }}>{quantity}</Text>
        </View>
        <TouchableOpacity onPress={IncreaseQuantity}>
          <MaterialIcons name="add-circle-outline" size={35} color="black" />
        </TouchableOpacity>
      </View>

      <Buttons
        Btn={
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white" }}>Add to cart   </Text>
            <FontAwesome5 name="shopping-cart" size={20} color="white" />
          </View>
        }
        loading={loading}
        onPress={NavigateToCartPage}
        width={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
    alignItems: "center",
  },
  itemImage: {
    height: 360,
    width: 360,
    borderRadius: 200,
    borderColor: "#470440",
    borderWidth: 2,
  },
  topContainer: {
    marginTop: 30,
    height: 50,
    width: "100%",
    //backgroundColor:"red",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 6,
  },
  description: {
    maxHeight: 100,
    width: 300,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "black",
    paddingVertical: 10,
    marginTop: 10,
  },
  quantity: {
    backgroundColor: "#470440",
    width: 200,
    height: 40,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contQuantity: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
export default Items;
