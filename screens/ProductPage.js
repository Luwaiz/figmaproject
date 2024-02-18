import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import API from '../constant/API'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler'

const ProductPage = () => {
    const [loading,setLoading]=useState(false)
    const [product,setProduct]=useState("")

    const getProducts= async()=>{
        setLoading(true)
        try{
            const response= await axios.get(API?.product)
            console.log(response?.data?.result?.products)
            setProduct(response?.data?.result?.products)
        }
        catch(e){
            console.log(e)
            setLoading(false)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(()=>
        {
            getProducts
        },[]
    )
  return (
    <View style={styles.container}>
      {loading? (
      <View style={{marginTop:height/2}}>
        <ActivityIndicator style={{alignSelf:"center"}} size={"large"} color={"#470440"}/>
      </View>):(
        <View>
        <ScrollView refreshControl={
            <RefreshControl
                onRefresh={()=>{
                    setLoading(true)
                    getProducts()
                }}
            />
        }><View>
        {product.map((item,index)=>(
            <View key={index.toString}>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
        </View>
      ))}
        </View>
        </ScrollView>
        </View>
      )}
    
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        backgroundColor:"white"
    }
})
export default ProductPage

