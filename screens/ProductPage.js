import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import AvailableProducts from "../component/AvailableProducts";
import API from "../constant/API";
import BackBtn from "../component/BackBtn";
const { height, width } = Dimensions.get("screen");

const ProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState([]);

  const getProducts = async () => {
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
              {product.map((item, index) => (
                <View
                  key={index.toString()}
                  style={{ justifyContent: "center" }}
                >
                    <AvailableProducts item={item} index={index}/>
                </View>
              ))}
            </View>
          </ScrollView>
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
});
export default ProductPage;
