import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
const { width, height } = Dimensions.get("screen");
const SearchFilter = ({ data, searcher, navigation }) => {
  return (
    <View>
      {searcher === "" ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          contentContainerStyle={{ alignItems: "center", flexGrow: 1 }}
          renderItem={({ item }) => {
            if (item.name.toLowerCase().includes(searcher.toLowerCase())) {
              return (
                
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Items", { item })}
                  >
                    <View style={styles.products}>
                      <Text>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                
              );
            }
          }}
        />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => {
            if (item?.name.toLowerCase().includes(searcher.toLowerCase())) {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Items", { item })}
                  >
                    <View style={styles.products}>
                      <Text>{item?.name}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            }
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  products: {
    width: width-50,
    backgroundColor: "rgba(71, 4, 64, 0.15)",
    marginVertical: 5,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 10,
    borderColor: "#470440",
    borderWidth: 1,
    justifyContent: "center",
  },
});
export default SearchFilter;
