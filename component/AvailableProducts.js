import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import UpdateProducts from '../screens/UpdateProducts'

const AvailableProducts = ({item,index}) => {
  const navigation =useNavigation()
  const name=(item.name)
  return (
    <View>
      <View style={{justifyContent:"center",paddingVertical:10,borderBottomWidth:1,marginVertical:10}}>
        <View style={styles.lines}><Text style={[styles.texts,{backgroundColor:"#470440",color:"white"}]}>Id</Text><Text style={[styles.texts,{borderBottomWidth:1,}]}>{(index+1).toString()}</Text></View>
        <View style={styles.lines}><Text style={[styles.texts,{backgroundColor:"#470440",color:"white"}]}>Name</Text><Text style={[styles.texts,{borderBottomWidth:1,}]}>{name}</Text></View>
        <View style={styles.lines}><Text style={[styles.texts,{backgroundColor:"#470440",color:"white"}]}>Price</Text><Text style={[styles.texts,{borderBottomWidth:1,}]}>${item.price}</Text></View>
        <View style={styles.lines}><Text style={[styles.texts,{backgroundColor:"#470440",color:"white"}]}>description</Text><Text style={[styles.texts,{borderBottomWidth:1,width:250}]}>{item.description}</Text></View>
        <View style={styles.lines}><Text style={[styles.texts,{backgroundColor:"#470440",color:"white"}]}>created</Text><Text style={[styles.texts,{borderBottomWidth:1,width:250}]}>{item.created_at}</Text></View>
        <View style={styles.lines}><Text style={[styles.texts,{backgroundColor:"#470440",color:"white"}]}>updated</Text><Text style={[styles.texts,{borderBottomWidth:1,width:250}]}>{item.updated_at}</Text></View>
        <View><TouchableOpacity 
          onPress={()=>{
            navigation.navigate("UpdateProducts",{fromProductPage:true}) }}
        ><Text style={[styles.texts,{backgroundColor:"#470440",color:"white",marginTop:30}]}>update</Text></TouchableOpacity></View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    lines:{
        flexDirection:"row",
    },
    texts:{
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        marginHorizontal:2,
        marginVertical:3,
        justifyContent:"center",
        alignSelf:"center"
    },
    variables:{
        borderBottomWidth:1,
    
    }
})
export default AvailableProducts

