import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SearchFilter = ({data,searcher,setSearcher}) => {

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={({item}) => {
        if(searcher===""){
            return null
        }else if(item.name.toLowerCase().includes(searcher.toLowerCase())){
            return(
                <View>
                <TouchableOpacity>
                <View style={styles.products} >
                    <Text>{item.name}</Text>
                    </View>
                </TouchableOpacity>
                </View>
            )
        }
      }}/>
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
        width:300,
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

