import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SearchFilter = ({data,searcher,setSearcher,navigation}) => {

  return (
    <View style={styles.container}>
    {searcher===""? (
      <View><FlatList showsVerticalScrollIndicator={false} data={data} style={{height:670}} renderItem={({item}) => {
        if(item.name.toLowerCase().includes(searcher.toLowerCase())){
            return(
                <View>
                <TouchableOpacity onPress={()=>navigation.navigate("Items",{item})}>
                <View style={styles.products} >
                    <Text>{item.name}</Text>
                    </View>
                </TouchableOpacity>
                </View>
            )
        }
      }}/></View>
    ):(
      <View><FlatList data={data} renderItem={({item}) => {
        if(item.name.toLowerCase().includes(searcher.toLowerCase())){
            return(
                <View>
                <TouchableOpacity onPress={()=>navigation.navigate("Items",{item})}>
                <View style={styles.products} >
                    <Text>{item.name}</Text>
                    </View>
                </TouchableOpacity>
                </View>
            )
        }
      }}/></View>
    )}
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        marginTop:10,
        height:"auto"
    },
    products:{
        width:330,
        backgroundColor:"rgba(71, 4, 64, 0.15)",
        marginVertical:5,
        paddingHorizontal:10,
        height:50,
        borderRadius:10,
        borderColor:"#470440",
        borderWidth:1,
        justifyContent:"center"
    }
})
export default SearchFilter

